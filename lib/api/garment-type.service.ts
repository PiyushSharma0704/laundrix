import { apiClient } from "@/lib/api/api-client";

import { API_ROUTES } from "@/utils/constants/api-routes";

import {
  ApiSuccessResponse,
  CreateGarmentTypeDto,
  GarmentType,
  GarmentTypeFilters,
  UpdateGarmentTypeDto,
} from "@/lib/types";

class GarmentTypeService {
  async getGarmentTypes(filters?: GarmentTypeFilters): Promise<GarmentType[]> {
    const params = new URLSearchParams();

    if (filters?.categoryId) {
      params.append("categoryId", filters.categoryId);
    }

    if (filters?.search) {
      params.append("search", filters.search);
    }

    if (filters?.isActive !== undefined) {
      params.append("isActive", String(filters.isActive));
    }

    const query = params.toString();

    const response = await apiClient.get<ApiSuccessResponse<GarmentType[]>>(
      `${API_ROUTES.GARMENT_TYPES}${query ? `?${query}` : ""}`,
    );

    return response.data;
  }

  async getGarmentType(id: string): Promise<GarmentType> {
    const response = await apiClient.get<ApiSuccessResponse<GarmentType>>(
      `${API_ROUTES.GARMENT_TYPES}/${id}`,
    );

    return response.data;
  }

  async createGarmentType(data: CreateGarmentTypeDto): Promise<GarmentType> {
    const response = await apiClient.post<ApiSuccessResponse<GarmentType>>(
      API_ROUTES.GARMENT_TYPES,
      data,
    );

    return response.data;
  }

  async updateGarmentType(
    id: string,
    data: UpdateGarmentTypeDto,
  ): Promise<GarmentType> {
    const response = await apiClient.patch<ApiSuccessResponse<GarmentType>>(
      `${API_ROUTES.GARMENT_TYPES}/${id}`,
      data,
    );

    return response.data;
  }

  async updateStatus(id: string, isActive: boolean): Promise<GarmentType> {
    const response = await apiClient.patch<ApiSuccessResponse<GarmentType>>(
      `${API_ROUTES.GARMENT_TYPES}/${id}/status`,
      {
        isActive,
      },
    );

    return response.data;
  }

  async getActiveGarmentTypes(): Promise<GarmentType[]> {
    const response = await apiClient.get<ApiSuccessResponse<GarmentType[]>>(
      `${API_ROUTES.GARMENT_TYPES}/active`,
    );

    return response.data;
  }
}

export const garmentTypeService = new GarmentTypeService();
