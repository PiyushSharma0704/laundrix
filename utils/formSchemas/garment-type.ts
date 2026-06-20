// utils/formSchemas/garment-type.ts
import { z } from "zod";

export const garmentTypeSchema = z.object({
  categoryId: z.string().min(1, "Category is required"),

  code: z.string().optional(),

  name: z.string().min(1, "Name is required").max(100),

  description: z.string().optional(),

  imageUrl: z.string().optional(),

  sortOrder: z.number().min(0).optional(),
});

export type GarmentTypeFormInputs = z.infer<typeof garmentTypeSchema>;
