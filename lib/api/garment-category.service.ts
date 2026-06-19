// lib/api/garment-category.service.ts

import { apiClient } from "@/lib/api/api-client";
import { API_ROUTES } from "@/utils/constants/api-routes";

import {
  ApiSuccessResponse,
  GarmentCategory,
  CreateGarmentCategoryDto,
  UpdateGarmentCategoryDto,
  UpdateGarmentCategoryStatusDto,
} from "@/lib/types";

export const garmentCategoryService = {
  getCategories: async () => {
    const response = await apiClient.get<ApiSuccessResponse<GarmentCategory[]>>(
      API_ROUTES.GARMENT_CATEGORIES,
    );

    return response.data;
  },

  getCategory: async (id: string) => {
    const response = await apiClient.get<ApiSuccessResponse<GarmentCategory>>(
      API_ROUTES.GARMENT_CATEGORY_DETAIL(id),
    );

    return response.data;
  },

  createCategory: async (payload: CreateGarmentCategoryDto) => {
    const response = await apiClient.post<ApiSuccessResponse<GarmentCategory>>(
      API_ROUTES.GARMENT_CATEGORIES,
      payload,
    );

    return response.data;
  },

  updateCategory: async (id: string, payload: UpdateGarmentCategoryDto) => {
    const response = await apiClient.patch<ApiSuccessResponse<GarmentCategory>>(
      API_ROUTES.GARMENT_CATEGORY_DETAIL(id),
      payload,
    );

    return response.data;
  },

  updateStatus: async (id: string, payload: UpdateGarmentCategoryStatusDto) => {
    const response = await apiClient.patch<ApiSuccessResponse<GarmentCategory>>(
      API_ROUTES.GARMENT_CATEGORY_STATUS(id),
      payload,
    );

    return response.data;
  },
};
