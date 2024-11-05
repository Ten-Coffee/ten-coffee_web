import { labelMapping } from '@/components/templates/(privated)/coffee-shop/components/UI/organism/data-revision-section/utils/LabelMapping';
import { DataItem } from '@/components/templates/(privated)/coffee-shop/components/UI/organism/data-revision/interfaces/data-item.interface';
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
      password: string;
      phone: string;
      cpf: string;
    };
    address: {
      street: string;
      number: string;
      complement?: string;
      neighborhood: string;
      city: string;
      state: string;
      zipCode: string;
    };
  };
  extractData: (data: Record<string, unknown>) => DataItem[]; // Adiciona a função extractData ao tipo
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
      contractEnd: ''
    },
    address: {
      street: '',
      number: '',
      complement: '',
      neighborhood: '',
      city: '',
      state: '',
      zipCode: ''
    },
    representative: {
      name: '',
      login: '',
      email: '',
      password: '',
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

    const convertToISOFormat = (dateString: string) => {
      const day = dateString.slice(0, 2);
      const month = dateString.slice(2, 4);
      const year = dateString.slice(4, 8);
      return `${year}-${month}-${day}`;
    };

    const removeMaskFromZipCode = (zipCode: string) => {
      return zipCode.replace(/\D/g, '');
    };

    const formattedContractStart = convertToISOFormat(coffeeShop.contractStart);
    const formattedContractEnd = convertToISOFormat(coffeeShop.contractEnd);
    const unmaskedZipCode = removeMaskFromZipCode(address.zipCode);

    return {
      name: coffeeShop.name,
      nameFantasy: coffeeShop.nameFantasy,
      cnpj: coffeeShop.cnpj,
      email: coffeeShop.email,
      phoneNumber: coffeeShop.phoneNumber,
      contractStart: formattedContractStart,
      contractEnd: formattedContractEnd,
      user: {
        name: representative.name,
        login: representative.login,
        userPermissionEnum: 'REPRESENTATIVE',
        password: representative.password,
        phone: representative.phone,
        cpf: representative.cpf
      },
      address: {
        street: address.street,
        number: address.number,
        complement: address.complement,
        neighborhood: address.neighborhood,
        city: address.city,
        state: address.state,
        zipCode: unmaskedZipCode
      }
    };
  },

  extractData: (data: Record<string, unknown>): DataItem[] => {
    return Object.entries(data)
      .filter(
        ([key]) =>
          key !== 'userPermissionEnum' &&
          key !== 'password' &&
          data[key] !== undefined &&
          data[key] !== ''
      )
      .map(([key, value]) => ({
        label: labelMapping[key] || key,
        value: String(value)
      }));
  }
}));
