import { ingredientsSchema } from '@/components/templates/(privated)/ingredients/schemas/ingredients.schema';
import { z } from 'zod';
import { create } from 'zustand';

type IngredientsType = z.infer<typeof ingredientsSchema>;

type StoreType = {
  form: z.infer<typeof ingredientsSchema>;
  update: (data: Partial<IngredientsType>) => void;
};

export const useIngredientsStore = create<StoreType>((set) => ({
  form: {
    productName: '',
    category: '',
    measurement: '',
    description: ''
  },
  update: (data) =>
    set((state) => ({
      form: { ...state.form, ...data }
    }))
}));
