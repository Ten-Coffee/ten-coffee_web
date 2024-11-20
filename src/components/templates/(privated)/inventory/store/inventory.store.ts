import { inventorySchema } from '@/components/templates/(privated)/inventory/schemas/inventory.schema';
import { z } from 'zod';
import { create } from 'zustand';

type InventoryForm = z.infer<typeof inventorySchema>;

type StoreType = {
  formData: InventoryForm;
  update: (data: Partial<InventoryForm>) => void;
};

export const useInventoryStore = create<StoreType>((set) => ({
  formData: {
    name: '',
    ingredientType: { value: '', id: 0 },
    amount: 0,
    supplier: '',
    lastPurchase: '',
    dueDateClosed: '',
    dueDateOpen: ''
  },
  update: (data) =>
    set((state) => ({
      formData: { ...state.formData, ...data }
    }))
}));
