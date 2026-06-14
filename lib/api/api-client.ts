import { API_ROUTES } from "@/utils/constants/api-routes";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export interface RequestOptions extends Omit<RequestInit, "body"> {
  body?: unknown;
}

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

async function refreshAccessToken() {
  const response = await fetch(`${API_URL}${API_ROUTES.REFRESH}`, {
    method: "POST",
    credentials: "include",
  });

  if (!response.ok) {
    throw new Error("Refresh failed");
  }
}

async function request<T>(
  endpoint: string,
  options: RequestOptions = {},
  retry = true,
): Promise<T> {
  const response = await fetch(`${API_URL}${endpoint}`, {
    credentials: "include",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(options.headers || {}),
    },
    body: options.body ? JSON.stringify(options.body) : undefined,
  });

  // Access token expired
  if (
    response.status === 401 &&
    retry &&
    endpoint !== "/auth/login" &&
    endpoint !== "/auth/refresh"
  ) {
    try {
      if (!refreshPromise) {
        refreshPromise = refreshAccessToken();
      }

      await refreshPromise;

      refreshPromise = null;

      return request<T>(endpoint, options, false);
    } catch {
      refreshPromise = null;

      if (typeof window !== "undefined") {
        window.location.href = "/auth/login";
      }

      throw new ApiError("Session expired", 401);
    }
  }

  const data = await response.json();

  if (!response.ok) {
    throw new ApiError(
      data.message || "Something went wrong",
      response.status,
      data.errors,
    );
  }

  return data;
}

export const apiClient = {
  get: <T>(endpoint: string) =>
    request<T>(endpoint, {
      method: "GET",
    }),

  post: <T>(endpoint: string, body?: unknown) =>
    request<T>(endpoint, {
      method: "POST",
      body,
    }),

  put: <T>(endpoint: string, body?: unknown) =>
    request<T>(endpoint, {
      method: "PUT",
      body,
    }),

  patch: <T>(endpoint: string, body?: unknown) =>
    request<T>(endpoint, {
      method: "PATCH",
      body,
    }),

  delete: <T>(endpoint: string) =>
    request<T>(endpoint, {
      method: "DELETE",
    }),
};
