import { DataItem } from '@/components/templates/(privated)/coffee-shop/components/UI/organism/data-revision/interfaces/data-item.interface';
import { MenuItem } from '@/components/templates/(privated)/menuItem/create/schemas/item-menu.schema';
import { create } from 'zustand';

type MenuStore = {
  formData: MenuItem;
  setItem: (item: Partial<MenuItem>) => void;
  resetItem: () => void;
  updateIngredients: (ingredientsName: string[]) => void;
  getMenuItemDataForRevision: () => DataItem[];
};

export const useMenuItemStore = create<MenuStore>((set, get) => ({
  formData: {
    name: '',
    description: '',
    category: 'FOOD',
    price: '0',
    ingredientsName: [],
    coffeeShopId: ''
  },
  setItem: (item) =>
    set((state) => ({
      formData: { ...state.formData, ...item }
    })),
  resetItem: () =>
    set({
      formData: {
        name: '',
        description: '',
        category: 'FOOD',
        price: '0',
        ingredientsName: [],
        coffeeShopId: ''
      }
    }),
  updateIngredients: (ingredientsName) =>
    set((state) => ({
      formData: { ...state.formData, ingredientsName }
    })),
  getMenuItemDataForRevision: () => {
    const { formData } = get();
    return [
      { label: 'Nome', value: formData.name },
      { label: 'Descrição', value: formData.description || 'N/A' },
      { label: 'Categoria', value: formData.category },
      { label: 'Preço', value: formData.price },
      {
        label: 'Ingredientes',
        value: formData.ingredientsName.join(', ') || 'N/A'
      }
    ];
  }
}));
