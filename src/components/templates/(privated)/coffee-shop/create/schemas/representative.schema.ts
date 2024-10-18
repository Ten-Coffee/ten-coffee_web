import { z } from 'zod';

export const representativeSchema = z.object({
  representativeName: z
    .string()
    .min(2, 'O nome deve ter pelo menos 2 caracteres'),
  representativeEmail: z.string().email('E-mail inválido'),
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
    .regex(/^\d{11}$/, 'Formato de CPF inválido'),
  birthDate: z.string().refine((date) => {
    const regex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
    return regex.test(date);
  }, 'Data de nascimento inválida. Use o formato DD/MM/AAAA.')
});
