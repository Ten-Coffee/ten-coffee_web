import { isValidCNPJ } from '@brazilian-utils/brazilian-utils';
import { z } from 'zod';

export const coffeeShopSchema = z.object({
  nameFantasy: z
    .string()
    .min(2, 'O nome da empresa deve ter pelo menos 2 caracteres'),
  name: z.string().min(2, 'A razão social deve ter pelo menos 2 caracteres'),
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
    .transform((value) => value.replace(/\D/g, ''))
    .refine(
      (date) => /^\d{8}$/.test(date),
      'Data de início inválida. Use o formato DD/MM/AAAA.'
    ),
  contractEnd: z
    .string()
    .transform((value) => value.replace(/\D/g, ''))
    .refine(
      (date) => /^\d{8}$/.test(date),
      'Data de fim inválida. Use o formato DD/MM/AAAA.'
    )
});
