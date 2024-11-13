import { z } from 'zod';

export const addressSchema = z.object({
  zipCode: z
    .string()
    .min(9, 'O CEP deve ter pelo menos 9 caracteres')
    .regex(/^\d{5}-\d{3}$/, 'Formato de CEP inválido'),
  street: z.string().min(1, 'A rua é obrigatória'),
  number: z.string().min(1, 'O número é obrigatório'),
  additionalInformation: z.string().optional(),
  neighborhood: z.string().min(1, 'O bairro é obrigatório'),
  city: z.string().min(1, 'A cidade é obrigatória'),
  state: z.string().min(1, 'O estado é obrigatório')
});
