import { z } from "zod";

export const storeSchema = z.object({
  name: z
    .string()
    .trim()
    .min(3, "Store name must be at least 3 characters")
    .max(100),

  slug: z
    .string()
    .trim()
    .min(3, "Slug is required")
    .max(100)
    .regex(
      /^[a-z0-9-]+$/,
      "Slug can only contain lowercase letters, numbers and hyphens",
    ),

  code: z
    .string()
    .trim()
    .min(2, "Store code must be at least 2 characters")
    .max(20),

  phone: z.string().optional(),

  email: z
    .string()
    .email("Invalid email")
    .optional()
    .or(z.literal("")),

  address: z
    .string()
    .max(500)
    .optional(),
});

export type StoreFormInputs =
  z.infer<typeof storeSchema>;