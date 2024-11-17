import { EDIT_USER_ZOD_PERMISSION } from '@/enums/user-permission.enum';
import { z } from 'zod';

export const editUserSchema = z.object({
  name: z.string().optional(),
  permission: z.enum(EDIT_USER_ZOD_PERMISSION).optional(),
  login: z.string().email().optional(),
  coffeeShop: z.string().optional(),
  cpf: z.string().nullable().optional(),
  phone: z
    .string()
    .transform((value) => value.replace(/\D/g, ''))
    .refine(
      (value) => /^\+?\d{10,15}$/.test(value),
      'O telefone deve ser um número de telefone válido, insira somente números'
    )
    .nullable()
    .optional()
});
