// lib/api/store.service.ts

import { apiClient } from "@/lib/api/api-client";
import { API_ROUTES } from "@/utils/constants/api-routes";

import {
  ApiSuccessResponse,
  Store,
  StoreDetail,
  CreateStoreRequest,
  UpdateStoreRequest,
} from "@/lib/types";

export const storeService = {
  getMyStores: async () => {
    const response = await apiClient.get<ApiSuccessResponse<Store[]>>(
      API_ROUTES.GET_MY_STORES,
    );

    return response.data;
  },

  getStoreById: async (storeId: string) => {
    const response = await apiClient.get<ApiSuccessResponse<StoreDetail>>(
      API_ROUTES.STORE_DETAIL(storeId),
    );

    return response.data;
  },

  createStore: async (payload: CreateStoreRequest) => {
    const response = await apiClient.post<ApiSuccessResponse<StoreDetail>>(
      API_ROUTES.CREATE_STORE,
      payload,
    );

    return response.data;
  },

  updateStore: async (storeId: string, payload: UpdateStoreRequest) => {
    const response = await apiClient.patch<ApiSuccessResponse<StoreDetail>>(
      API_ROUTES.STORE_DETAIL(storeId),
      payload,
    );

    return response.data;
  },

  deleteStore: async (storeId: string) => {
    const response = await apiClient.delete<ApiSuccessResponse<null>>(
      API_ROUTES.STORE_DETAIL(storeId),
    );

    return response;
  },
};
