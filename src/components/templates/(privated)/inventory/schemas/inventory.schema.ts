import { z } from 'zod';

export const inventorySchema = z.object({
  name: z.string(),
  ingredientType: z.object({
    id: z.number(),
    value: z.string()
  }),
  amount: z
    .string()
    .transform((val) => Number(val))
    .pipe(
      z
        .number()
        .int('A quantidade deve ser um número inteiro')
        .positive('A quantidade deve ser positiva')
    ),
  supplier: z.string(),
  lastPurchase: z
    .string()
    .refine(
      (date) => /^\d{4}-\d{2}-\d{2}$/.test(date),
      'Data de início inválida. Use o formato YYYY-MM-DD.'
    ),
  dueDateClosed: z
    .string()
    .refine(
      (date) => /^\d{4}-\d{2}-\d{2}$/.test(date),
      'Data de início inválida. Use o formato YYYY-MM-DD.'
    ),
  dueDateOpen: z
    .string()
    .refine(
      (date) => /^\d{4}-\d{2}-\d{2}$/.test(date),
      'Data de início inválida. Use o formato YYYY-MM-DD.'
    )
});
