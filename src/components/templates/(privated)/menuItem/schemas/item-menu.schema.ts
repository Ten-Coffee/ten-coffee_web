import { z } from 'zod';

export const menuItemSchema = z.object({
  name: z.string().min(1, 'O nome é obrigatório'),
  description: z.string().optional(),
  category: z.enum(['FOOD', 'DRINK']),
  price: z
    .string()
    .regex(/^\d+([,.]\d{1,2})?$/, 'O preço deve ser um número válido'),
  ingredients: z.array(
    z.object({
      ingredientTypeId: z.string().min(1, 'O ID do ingrediente é obrigatório'), // Agora usa ID
      quantity: z.number().min(1, 'A quantidade do ingrediente é obrigatória')
    })
  ),
  coffeeShopId: z.string().optional(),
  image: z.any()
});

export type MenuItem = z.infer<typeof menuItemSchema>;
