import z from "zod";

export const serviceTypeSchema = z.object({
  code: z.string().optional(),

  name: z.string().min(1),

  description: z.string().optional(),

  imageUrl: z.string().optional(),

  sortOrder: z.number().min(0).optional(),
});

export type ServiceTypeFormValues = z.infer<typeof serviceTypeSchema>;
