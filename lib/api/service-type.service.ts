import { apiClient } from "@/lib/api/api-client";

import { API_ROUTES } from "@/utils/constants/api-routes";

import {
  ApiSuccessResponse,
  ServiceType,
  CreateServiceTypeDto,
  UpdateServiceTypeDto,
  UpdateServiceTypeStatusDto,
} from "@/lib/types";

export const serviceTypeService = {
  getServiceTypes: async () => {
    const response = await apiClient.get<ApiSuccessResponse<ServiceType[]>>(
      API_ROUTES.SERVICE_TYPES,
    );

    return response.data;
  },

  getServiceType: async (id: string) => {
    const response = await apiClient.get<ApiSuccessResponse<ServiceType>>(
      `${API_ROUTES.SERVICE_TYPES}/${id}`,
    );

    return response.data;
  },

  createServiceType: async (payload: CreateServiceTypeDto) => {
    const response = await apiClient.post<ApiSuccessResponse<ServiceType>>(
      API_ROUTES.SERVICE_TYPES,
      payload,
    );

    return response.data;
  },

  updateServiceType: async (id: string, payload: UpdateServiceTypeDto) => {
    const response = await apiClient.patch<ApiSuccessResponse<ServiceType>>(
      `${API_ROUTES.SERVICE_TYPES}/${id}`,
      payload,
    );

    return response.data;
  },

  updateStatus: async (id: string, payload: UpdateServiceTypeStatusDto) => {
    const response = await apiClient.patch<ApiSuccessResponse<ServiceType>>(
      `${API_ROUTES.SERVICE_TYPES}/${id}/status`,
      payload,
    );

    return response.data;
  },

  getActiveServiceTypes: async () => {
    const response = await apiClient.get<ApiSuccessResponse<ServiceType[]>>(
      `${API_ROUTES.SERVICE_TYPES}/active`,
    );

    return response.data;
  },
};
