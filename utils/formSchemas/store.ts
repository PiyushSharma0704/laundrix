import { z } from "zod";

export const storeSchema = z.object({
  name: z
    .string()
    .min(2, "Store name must be at least 2 characters"),

  slug: z
    .string()
    .min(2, "Slug is required")
    .regex(
      /^[a-z0-9-]+$/,
      "Slug can only contain lowercase letters, numbers and hyphens",
    ),
});

export type StoreFormInputs = z.infer<typeof storeSchema>;