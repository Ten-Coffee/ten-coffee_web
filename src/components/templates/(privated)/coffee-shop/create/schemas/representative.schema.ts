import { z } from 'zod';

export const representativeSchema = z.object({
  name: z.string().min(2, 'O nome deve ter pelo menos 2 caracteres'),
  login: z.string().email('E-mail inválido'),
  password: z.string().min(8).max(20),
  phone: z
    .string()
    .min(10, 'O telefone deve ter pelo menos 10 caracteres')
    .regex(
      /^\+?\d{10,15}$/,
      'O telefone deve ser um número de telefone válido, insira somente números'
    ),
  cpf: z
    .string()
    .length(11, 'O CPF deve ter exatamente 11 dígitos')
    .regex(/^\d{11}$/, 'Formato de CPF inválido')
});
