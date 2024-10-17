import { isValidCNPJ } from '@brazilian-utils/brazilian-utils';
import { z } from 'zod';

export const coffeeShopSchema = z.object({
  nameFantasy: z
    .string()
    .min(2, 'O nome da empresa deve ter pelo menos 2 caracteres'),
  name: z.string().min(2, 'O nome fantasia deve ter pelo menos 2 caracteres'),
  cnpj: z
    .string()
    .transform((value) => value.replace(/\D/g, ''))
    .refine(isValidCNPJ, 'CNPJ inválido'),
  email: z.string().email('E-mail inválido'),
  phoneNumber: z
    .string()
    .regex(
      /^\+?\d{10,15}$/,
      'O telefone 1 deve ser um número de telefone válido, insira somente números'
    ),
  contractStart: z.string().refine((date) => {
    const regex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
    return regex.test(date);
  }, 'Data de início inválida. Use o formato DD/MM/AAAA.'),
  contractEnd: z.string().refine((date) => {
    const regex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
    return regex.test(date);
  }, 'Data de fim inválida. Use o formato DD/MM/AAAA.')
});
