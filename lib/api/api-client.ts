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

const apiClient: AxiosInstance = axios.create({
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
    }
  );
};

apiClient.interceptors.response.use(
  (response) => response.data,

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

        return apiClient(originalRequest);
      } catch {
        refreshPromise = null;

        if (typeof window !== "undefined") {
          window.location.href = "/auth/login";
        }

        throw new ApiError("Session expired", 401);
      }
    }

    throw new ApiError(
      (error.response?.data as { message?: string })?.message ||
        error.message ||
        "Something went wrong",
      status || 500,
      error.response?.data
    );
  }
);

export { apiClient };