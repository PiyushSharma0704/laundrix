//api-routes.ts

export const API_ROUTES = {
  // auth
  LOGIN: "/auth/login",
  LOGOUT: "/auth/logout",
  ME: "/auth/me",
  SIGNUP: "/auth/register",
  FORGOT_PASSWORD: "/auth/forgot-password",
  RESET_PASSWORD: "/auth/reset-password",
  REFRESH: "/auth/refresh",
  // stores
  CREATE_STORE: "/stores/create",
  GET_MY_STORES: "/stores/my-stores",
  STORE_DETAIL: (storeId: string) => `/stores/${storeId}`,
  // customers
  CUSTOMERS: "/customers",
  CUSTOMER_DETAIL: (customerId: string) => `/customers/${customerId}`,
  // garments categories
  GARMENT_CATEGORIES: "/garment-categories",
  GARMENT_CATEGORY_DETAIL: (id: string) => `/garment-categories/${id}`,
  GARMENT_CATEGORY_STATUS: (id: string) => `/garment-categories/${id}/status`,
} as const;
