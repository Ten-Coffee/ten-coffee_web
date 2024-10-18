import { addressSchema } from '@/components/templates/(privated)/coffee-shop/create/schemas/address.schema';
import { coffeeShopSchema } from '@/components/templates/(privated)/coffee-shop/create/schemas/coffee-shop.schema';
import { representativeSchema } from '@/components/templates/(privated)/coffee-shop/create/schemas/representative.schema';
import { z } from 'zod';
import { create } from 'zustand';

type CoffeeShopFormData = {
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
