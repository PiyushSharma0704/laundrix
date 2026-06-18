import axios, {
  AxiosError,
  AxiosInstance,
  InternalAxiosRequestConfig,
} from "axios";

import { API_ROUTES } from "@/utils/constants/api-routes";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export class ApiError extends Error {
  status: number;
  errors?: unknown;

  constructor(message: string, status: number, errors?: unknown) {
    super(message);

    this.status = status;
    this.errors = errors;
  }
}

let refreshPromise: Promise<void> | null = null;

const instance: AxiosInstance = axios.create({
  baseURL: API_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

const refreshAccessToken = async () => {
  await axios.post(
    `${API_URL}${API_ROUTES.REFRESH}`,
    {},
    {
      withCredentials: true,
    },
  );
};

instance.interceptors.response.use(
  (response) => response,

  async (error: AxiosError) => {
    const originalRequest = error.config as InternalAxiosRequestConfig & {
      _retry?: boolean;
    };

    const status = error.response?.status;

    if (
      status === 401 &&
      !originalRequest?._retry &&
      originalRequest?.url !== API_ROUTES.LOGIN &&
      originalRequest?.url !== API_ROUTES.REFRESH
    ) {
      originalRequest._retry = true;

      try {
        if (!refreshPromise) {
          refreshPromise = refreshAccessToken();
        }

        await refreshPromise;
        refreshPromise = null;

        return instance(originalRequest);
      } catch {
        refreshPromise = null;

        if (typeof window !== "undefined") {
          window.location.href = "/auth/login";
        }

        throw new ApiError("Session expired", 401);
      }
    }

    throw new ApiError(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (error.response?.data as any)?.message || error.message,
      status || 500,
      error.response?.data,
    );
  },
);

export const apiClient = {
  get: async <T>(url: string, config?: object): Promise<T> => {
    const response = await instance.get<T>(url, config);

    return response.data;
  },

  post: async <T>(url: string, data?: unknown, config?: object): Promise<T> => {
    const response = await instance.post<T>(url, data, config);

    return response.data;
  },

  patch: async <T>(
    url: string,
    data?: unknown,
    config?: object,
  ): Promise<T> => {
    const response = await instance.patch<T>(url, data, config);

    return response.data;
  },

  put: async <T>(url: string, data?: unknown, config?: object): Promise<T> => {
    const response = await instance.put<T>(url, data, config);

    return response.data;
  },

  delete: async <T>(url: string, config?: object): Promise<T> => {
    const response = await instance.delete<T>(url, config);

    return response.data;
  },
};
