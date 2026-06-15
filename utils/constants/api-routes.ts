//api-routes.ts

export const API_ROUTES = {
  LOGIN: "/auth/login",
  LOGOUT: "/auth/logout",
  ME: "/auth/me",
  SIGNUP: "/auth/register",
  FORGOT_PASSWORD: "/auth/forgot-password",
  RESET_PASSWORD: "/auth/reset-password",
  REFRESH: "/auth/refresh",
  CREATE_STORE: "/stores/create",
  GET_MY_STORES: "/stores/my-stores",
  STORE_DETAIL: (storeId: string) => `/stores/${storeId}`,
} as const;
