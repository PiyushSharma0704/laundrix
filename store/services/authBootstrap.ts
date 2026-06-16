import { apiClient } from "@/lib/api/api-client";
import { MeResponse } from "@/lib/types";
import { API_ROUTES } from "@/utils/constants/api-routes";

export const getCurrentUser = async () => {
  return apiClient.get<MeResponse>(API_ROUTES.ME);
};
