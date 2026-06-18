// lib/types.ts
export interface ApiSuccessResponse<T> {
  success: true;
  data: T;
  message?: string;
}

export interface ApiErrorResponse {
  success: false;
  message: string;
  errors?: unknown;
}

export type ApiResponse<T> = ApiSuccessResponse<T> | ApiErrorResponse;

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  success: boolean;

  message: string;

  data: {
    user: User;
  };
}

export interface MeResponse {
  success: true;
  message: string;
  data: User;
}

export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  loading: boolean;
}
export interface Store {
  id: string;
  name: string;
  slug: string;
  businessId: string;
  createdAt: string;
}

export interface StoreDetail {
  id: string;
  name: string;
  slug: string;
  ownerId: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreateStoreRequest {
  name: string;
  slug: string;
}

export type GetStoresResponse = ApiSuccessResponse<Store[]>;

export type GetStoreDetailResponse = ApiSuccessResponse<StoreDetail>;

export type CreateStoreResponse = ApiSuccessResponse<StoreDetail>;

export interface Business {
  id: string;
  name: string;
  slug: string;

  createdAt: string;
  updatedAt: string;

  _count?: {
    stores: number;
  };
}

export interface BusinessDetail extends Business {
  stores?: {
    id: string;
    name: string;
    slug: string;
  }[];
}

export interface CreateBusinessRequest {
  name: string;
  slug: string;
}

export interface Customer {
  id: string;

  firstName: string;
  lastName?: string;

  phone: string;
  dialCode: string;

  email?: string;
  notes?: string;

  isActive: boolean;

  createdAt: string;
  updatedAt: string;
}

export interface CreateCustomerDto {
  firstName: string;
  lastName?: string;

  phone: string;
  dialCode?: string;

  email?: string;
  notes?: string;

  storeId: string;
}

export interface UpdateCustomerDto {
  firstName?: string;
  lastName?: string;

  email?: string;
  notes?: string;

  isActive?: boolean;
}

export interface CustomerQuery {
  page?: number;
  limit?: number;
  search?: string;
}

export interface CustomersResponse {
  customers: Customer[];
  total: number;
  page: number;
  limit: number;
}

export interface CustomerResponse {
  customer: Customer;
}
