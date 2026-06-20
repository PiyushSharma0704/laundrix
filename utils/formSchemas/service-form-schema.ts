// service-form-schema.ts
import { PricingUnit } from "@/lib/types";
import { z } from "zod";

export const serviceCatalogSchema = z.object({
  serviceTypeId: z.string().min(1, "Service type is required"),

  garmentTypeId: z.string().min(1, "Garment type is required"),

  code: z.string().optional(),

  description: z.string().optional(),

  pricingUnit: z.nativeEnum(PricingUnit),

  basePrice: z.number().positive("Base price must be greater than 0"),

  minimumPrice: z.number().optional(),

  gstRate: z.number().min(0).max(100).optional(),
});

export type ServiceCatalogFormInputs = z.infer<typeof serviceCatalogSchema>;
