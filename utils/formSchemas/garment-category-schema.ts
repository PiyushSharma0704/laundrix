import { z } from "zod";

export const garmentCategorySchema = z.object({
  code: z
    .string()
    .trim()
    .max(20, "Code cannot exceed 20 characters")
    .optional()
    .or(z.literal("")),

  name: z
    .string()
    .trim()
    .min(1, "Name is required")
    .max(100),

  description: z
    .string()
    .trim()
    .max(500)
    .optional()
    .or(z.literal("")),

  imageUrl: z
    .string()
    .url("Please enter a valid URL")
    .optional()
    .or(z.literal("")),

  sortOrder: z.number().min(0).optional(),

});

export type GarmentCategoryFormInputs =
  z.infer<typeof garmentCategorySchema>;