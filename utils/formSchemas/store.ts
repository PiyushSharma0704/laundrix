import { z } from "zod";

export const storeSchema = z.object({
  name: z.string().min(2, "Store name must be at least 2 characters"),

  slug: z
    .string()
    .min(2, "Slug is required")
    .regex(
      /^[a-z0-9-]+$/,
      "Slug can only contain lowercase letters, numbers and hyphens",
    ),
});

export const garmentCategorySchema = z.object({
  name: z.string().min(2),
  description: z.string().optional(),
});

export type GarmentCategoryFormInputs = z.infer<typeof garmentCategorySchema>;

export type StoreFormInputs = z.infer<typeof storeSchema>;
