import { z } from 'zod';

export const representativeSchema = z.object({
  name: z.string().min(2, 'O nome deve ter pelo menos 2 caracteres'),
  login: z.string().min(2, 'LOGIN ZUADO'),
  password: z.string().min(2, 'SENHA ZUADO'),
  email: z.string().email('E-mail inválido'),
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
    .refine(
      (value) => value.length === 11,
      'O CPF deve ter exatamente 11 dígitos'
    )
    .refine((value) => /^\d{11}$/.test(value), 'Formato de CPF inválido')
});
