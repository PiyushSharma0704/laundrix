// lib/api/store.service.ts

import { apiClient } from "@/lib/api/api-client";
import { API_ROUTES } from "@/utils/constants/api-routes";

import {
  ApiSuccessResponse,
  Store,
  StoreDetail,
  CreateStoreRequest,
} from "@/lib/types";
import { toast } from "sonner";

export const storeService = {
  getMyStores: async () => {
    await new Promise((resolve) =>
    setTimeout(resolve, 3000)
  );
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

    if (!response.success) {
      toast.error(response.message || "Failed to create store");
    }

    return response.data; 

  },
};
