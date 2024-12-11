import { isValidCPF } from '@brazilian-utils/brazilian-utils';
import { z } from 'zod';

export const representativeSchema = z.object({
  name: z.string().min(2, 'O nome deve ter pelo menos 2 caracteres'),
  login: z.string().email('E-mail inválido'),
  phone: z
    .string()
    .transform((value) => value.replace(/\D/g, ''))
    .refine(
      (value) => /^\+?\d{10,15}$/.test(value),
      'O telefone deve ser um número de telefone válido, insira somente números'
    ),
  cpf: z
    .string()
    .transform((value) => value.replace(/\D/g, ''))
    .refine(isValidCPF, 'CPF inválido'),
  password: z.string()
});
