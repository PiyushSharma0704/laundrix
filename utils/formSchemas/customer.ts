import { z } from "zod";

export const customerSchema = z.object({
  firstName: z
    .string()
    .min(2, "First name must be at least 2 characters"),

  lastName: z.string().optional(),

  phone: z
    .string()
    .regex(/^[0-9]{10}$/, "Phone number must be 10 digits"),

  email: z
    .string()
    .email("Invalid email address")
    .optional()
    .or(z.literal("")),

  notes: z.string().optional(),

  storeId: z
    .string()
    .min(1, "Please select a store"),
});

export type CustomerFormInputs = z.infer<
  typeof customerSchema
>;