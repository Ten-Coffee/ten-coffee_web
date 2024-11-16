import { credentialsSchema } from '@/components/templates/(privated)/user/schemas/credentials.schema';
import { userSchema } from '@/components/templates/(privated)/user/schemas/user.schema';
import { z } from 'zod';
import { create } from 'zustand';

type UserFormData = {
  user: z.infer<typeof userSchema>;
  credentials: z.infer<typeof credentialsSchema>;
};

type StoreType = {
  data: UserFormData;
  update: (data: Partial<UserFormData>) => void;
};

export const useUserFormStore = create<StoreType>((set) => ({
  data: {
    user: {
      name: '',
      coffeeShop: {
        id: 0,
        value: ''
      },
      permission: 'Gerente'
    },
    credentials: {
      login: '',
      password: ''
    }
  },
  update: (data) =>
    set((state) => ({
      data: { ...state.data, ...data }
    }))
}));
