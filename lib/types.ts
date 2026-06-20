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

export interface UpdateStoreRequest {
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
export interface PaginationMeta {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}

export interface GetCustomersResponse {
  success: boolean;
  message: string;
  data: {
    data: Customer[];
    meta: PaginationMeta;
  };
}

// Garment Categories
export interface GarmentCategory {
  id: string;
  name: string;
  description?: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface CreateGarmentCategoryDto {
  name: string;
  description?: string;
}

export interface UpdateGarmentCategoryDto {
  name?: string;
  description?: string;
}

export interface UpdateGarmentCategoryStatusDto {
  isActive: boolean;
}

export interface GetGarmentCategoriesResponse {
  success: boolean;
  data: GarmentCategory[];
}

// Garment types

export enum PricingUnit {
  PIECE = "PIECE",
  KG = "KG",
  SQ_FT = "SQ_FT",
}

export interface GarmentType {
  id: string;
  categoryId: string;
  code?: string;
  name: string;
  description?: string;
  imageUrl?: string;
  sortOrder?: number;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
  category?: {
    id: string;
    name: string;
  };
}

export interface CreateGarmentTypeDto {
  categoryId: string;
  code?: string;
  name: string;
  description?: string;
  imageUrl?: string;
  sortOrder?: number;
}

export interface UpdateGarmentTypeDto {
  categoryId?: string;
  code?: string;
  name?: string;
  description?: string;
  imageUrl?: string;
  sortOrder?: number;
}

export interface GarmentTypeFilters {
  categoryId?: string;
  search?: string;
  isActive?: boolean;
}

// Service Type
export interface ServiceType {
  id: string;

  businessId: string;

  code: string | null;

  name: string;

  description: string | null;

  imageUrl: string | null;

  sortOrder: number;

  isActive: boolean;

  createdAt: string;

  updatedAt: string;

  deletedAt: string | null;
}

export interface CreateServiceTypeDto {
  code?: string;

  name: string;

  description?: string;

  imageUrl?: string;

  sortOrder?: number;
}

export interface UpdateServiceTypeDto {
  code?: string;

  name?: string;

  description?: string;

  imageUrl?: string;

  sortOrder?: number;
}

export interface UpdateServiceTypeStatusDto {
  isActive: boolean;
}

export interface ServiceTypeFilters {
  search?: string;

  isActive?: boolean;
}

// Service Catalog

export interface ServiceCatalogItem {
  id: string;

  businessId: string;

  serviceTypeId: string;

  garmentTypeId: string;

  code?: string | null;

  description?: string | null;

  pricingUnit: PricingUnit;

  basePrice: number;

  minimumPrice?: number | null;

  gstRate?: number | null;

  isActive: boolean;

  createdAt: string;

  updatedAt: string;

  serviceType?: {
    id: string;
    name: string;
  };

  garmentType?: {
    id: string;
    name: string;
    category?: {
      id: string;
      name: string;
    };
  };
}

export interface CreateServiceCatalogItemDto {
  serviceTypeId: string;

  garmentTypeId: string;

  code?: string;

  description?: string;

  pricingUnit: PricingUnit;

  basePrice: number;

  minimumPrice?: number;

  gstRate?: number;
}

export interface UpdateServiceCatalogItemDto {
  serviceTypeId?: string;

  garmentTypeId?: string;

  code?: string;

  description?: string;

  pricingUnit?: PricingUnit;

  basePrice?: number;

  minimumPrice?: number;

  gstRate?: number;
}

export interface UpdateServiceCatalogItemStatusDto {
  isActive: boolean;
}

export interface ServiceCatalogItemFilters {
  serviceTypeId?: string;

  garmentTypeId?: string;

  pricingUnit?: PricingUnit;

  isActive?: boolean;

  search?: string;
}
