import { isValidCNPJ } from '@brazilian-utils/brazilian-utils';
import { z } from 'zod';
import { create } from 'zustand';

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

export type CoffeeShopFormData = {
  coffeeShop: z.infer<typeof coffeeShopSchema>;
  address: z.infer<typeof addressSchema>;
  representative: z.infer<typeof representativeSchema>;
};

type FormStore = {
  formData: CoffeeShopFormData;
  updateFormData: (data: Partial<CoffeeShopFormData>) => void;
};

export const useFormStore = create<FormStore>((set) => ({
  formData: {
    coffeeShop: {
      nameFantasy: '',
      name: '',
      cnpj: '',
      email: '',
      phoneNumber: '',
      contractStart: '',
      contractEnd: ''
    },
    address: {
      zipCode: '',
      street: '',
      number: '',
      additionalInformation: '',
      neighborhood: '',
      city: '',
      state: ''
    },
    representative: {
      representativeName: '',
      representativeEmail: '',
      phone: '',
      cpf: '',
      birthDate: ''
    }
  },
  updateFormData: (data) =>
    set((state) => ({
      formData: { ...state.formData, ...data }
    }))
}));
