// lib/api/customer.service.ts

import {
  CreateCustomerDto,
  CustomerQuery,
  GetCustomersResponse,
  UpdateCustomerDto,
} from "../types";
import { apiClient } from "./api-client";
import { API_ROUTES } from "@/utils/constants/api-routes";

export const customerService = {
  getCustomers: (params?: CustomerQuery) =>
    apiClient.get<GetCustomersResponse>(API_ROUTES.CUSTOMERS, {
      params,
    }),

  getCustomer: (customerId: string) =>
    apiClient.get(API_ROUTES.CUSTOMER_DETAIL(customerId)),

  createCustomer: (payload: CreateCustomerDto) =>
    apiClient.post(API_ROUTES.CUSTOMERS, payload),

  updateCustomer: (customerId: string, payload: UpdateCustomerDto) =>
    apiClient.patch(API_ROUTES.CUSTOMER_DETAIL(customerId), payload),

  deleteCustomer: (customerId: string) =>
    apiClient.delete(API_ROUTES.CUSTOMER_DETAIL(customerId)),
};
