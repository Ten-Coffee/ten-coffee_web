import { isValidCNPJ } from '@brazilian-utils/brazilian-utils';
import { z } from 'zod';

export const coffeeShopSchema = z.object({
  id: z.number().optional(),
  status: z.enum(['ACTIVE', 'INACTIVE']).optional().default('ACTIVE'),
  name: z.string().min(2, 'A razão social deve ter pelo menos 2 caracteres'),
  nameFantasy: z
    .string()
    .min(2, 'O nome fantasia deve ter pelo menos 2 caracteres'),
  cnpj: z
    .string()
    .transform((value) => value.replace(/\D/g, ''))
    .refine(isValidCNPJ, 'CNPJ inválido'),
  email: z.string().email('E-mail inválido'),
  phoneNumber: z
    .string()
    .transform((value) => value.replace(/\D/g, ''))
    .refine(
      (value) => /^\+?\d{10,15}$/.test(value),
      'O telefone deve ser um número de telefone válido, insira somente números'
    ),
  contractStart: z
    .string()
    .refine(
      (date) => /^\d{4}-\d{2}-\d{2}$/.test(date),
      'Data de início inválida. Use o formato YYYY-MM-DD.'
    ),
  contractEnd: z
    .string()
    .refine(
      (date) => /^\d{4}-\d{2}-\d{2}$/.test(date),
      'Data de fim inválida. Use o formato YYYY-MM-DD.'
    )
});
