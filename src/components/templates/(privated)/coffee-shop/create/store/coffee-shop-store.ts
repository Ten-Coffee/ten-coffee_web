import { DataItem } from '@/components/templates/(privated)/coffee-shop/components/UI/organism/data-revision/interfaces/data-item.interface';
import { addressSchema } from '@/components/templates/(privated)/coffee-shop/create/schemas/address.schema';
import { coffeeShopSchema } from '@/components/templates/(privated)/coffee-shop/create/schemas/coffee-shop.schema';
import { representativeSchema } from '@/components/templates/(privated)/coffee-shop/create/schemas/representative.schema';
import { extractData } from '@/utils/extract-data.utils';
import { removeZipCodeMask } from '@/utils/remove-mask.utils';
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
  formatData: () => {
    name: string;
    nameFantasy: string;
    cnpj: string;
    email: string;
    phoneNumber: string;
    contractStart: string;
    contractEnd: string;
    user: {
      name: string;
      login: string;
      userPermissionEnum: string;
      phone: string;
      cpf: string;
    };
    address: {
      street: string;
      number: string;
      additionalInformation?: string;
      neighborhood: string;
      city: string;
      state: string;
      zipCode: string;
    };
  };
  extractData: (data: Record<string, unknown>) => DataItem[];
};

export const useFormStore = create<FormStore>((set, get) => ({
  formData: {
    coffeeShop: {
      name: '',
      nameFantasy: '',
      cnpj: '',
      email: '',
      phoneNumber: '',
      contractStart: '',
      contractEnd: '',
      status: 'ACTIVE'
    },
    address: {
      street: '',
      number: '',
      additionalInformation: '',
      neighborhood: '',
      city: '',
      state: '',
      zipCode: ''
    },
    representative: {
      name: '',
      login: '',
      phone: '',
      cpf: ''
    }
  },

  updateFormData: (data) =>
    set((state) => ({
      formData: { ...state.formData, ...data }
    })),

  formatData: () => {
    const { coffeeShop, representative, address } = get().formData;

    const unmaskedZipCode = removeZipCodeMask(address.zipCode);

    return {
      name: coffeeShop.name,
      nameFantasy: coffeeShop.nameFantasy,
      cnpj: coffeeShop.cnpj,
      email: coffeeShop.email,
      phoneNumber: coffeeShop.phoneNumber,
      contractStart: coffeeShop.contractStart,
      contractEnd: coffeeShop.contractEnd,
      user: {
        name: representative.name,
        login: representative.login,
        userPermissionEnum: 'REPRESENTATIVE',
        phone: representative.phone,
        cpf: representative.cpf
      },
      address: {
        street: address.street,
        number: address.number,
        additionalInformation: address.additionalInformation,
        neighborhood: address.neighborhood,
        city: address.city,
        state: address.state,
        zipCode: unmaskedZipCode
      }
    };
  },

  extractData: (data: Record<string, unknown>): DataItem[] => {
    return extractData(data);
  }
}));
