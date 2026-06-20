import { apiClient } from "@/lib/api/api-client";
import { API_ROUTES } from "@/utils/constants/api-routes";

import {
  ApiSuccessResponse,
  ServiceCatalogItem,
  CreateServiceCatalogItemDto,
  UpdateServiceCatalogItemDto,
  UpdateServiceCatalogItemStatusDto,
} from "@/lib/types";

export const serviceCatalogService = {
  getItems: async () => {
    const response = await apiClient.get<
      ApiSuccessResponse<ServiceCatalogItem[]>
    >(API_ROUTES.SERVICE_CATALOG);

    return response.data;
  },

  getItem: async (id: string) => {
    const response = await apiClient.get<
      ApiSuccessResponse<ServiceCatalogItem>
    >(`${API_ROUTES.SERVICE_CATALOG}/${id}`);

    return response.data;
  },

  createItem: async (payload: CreateServiceCatalogItemDto) => {
    const response = await apiClient.post<
      ApiSuccessResponse<ServiceCatalogItem>
    >(API_ROUTES.SERVICE_CATALOG, payload);

    return response.data;
  },

  updateItem: async (id: string, payload: UpdateServiceCatalogItemDto) => {
    const response = await apiClient.patch<
      ApiSuccessResponse<ServiceCatalogItem>
    >(`${API_ROUTES.SERVICE_CATALOG}/${id}`, payload);

    return response.data;
  },

  updateStatus: async (
    id: string,
    payload: UpdateServiceCatalogItemStatusDto,
  ) => {
    const response = await apiClient.patch<
      ApiSuccessResponse<ServiceCatalogItem>
    >(`${API_ROUTES.SERVICE_CATALOG}/${id}/status`, payload);

    return response.data;
  },
};
