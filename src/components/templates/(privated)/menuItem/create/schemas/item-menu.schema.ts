import { z } from 'zod';

export const menuItemSchema = z.object({
  name: z.string().min(1, 'O nome é obrigatório'),
  description: z.string().optional(),
  category: z.enum(['FOOD', 'DRINK']),
  price: z
    .string()
    .regex(/^\d+([,.]\d{1,2})?$/, 'O preço deve ser um número válido'),
  ingredientsName: z.array(
    z.string().min(1, 'O nome do ingrediente é obrigatório')
  ),
  coffeeShopId: z.string().optional()
});

export type MenuItem = z.infer<typeof menuItemSchema>;
