import { z } from 'zod';

export const addressSchema = z.object({
  zipCode: z
    .string()
    .length(8, 'O CEP deve ter exatamente 9 dígitos')
    .regex(/^\d{8}$/, 'Formato de CEP inválido'),
  street: z.string().min(1, 'A rua é obrigatória'),
  number: z.string().min(1, 'O número é obrigatório'),
  additionalInformation: z.string().optional(),
  neighborhood: z.string().min(1, 'O bairro é obrigatório'),
  city: z.string().min(1, 'A cidade é obrigatória'),
  state: z.string().min(1, 'O estado é obrigatório')
});
