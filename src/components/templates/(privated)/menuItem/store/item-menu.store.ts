import { DataItem } from '@/components/templates/(privated)/coffee-shop/components/UI/organism/data-revision/interfaces/data-item.interface';
import { MenuItem } from '@/components/templates/(privated)/menuItem/schemas/item-menu.schema';
import { create } from 'zustand';

type Ingredient = {
  ingredientTypeId: string;
  quantity: number;
};

type MenuStore = {
  formData: MenuItem & { ingredients: Ingredient[] };
  setItem: (item: Partial<MenuItem & { ingredients: Ingredient[] }>) => void;
  resetItem: () => void;
  updateIngredients: (ingredients: Ingredient[]) => void;
  updateImage: (imageBase64: string) => void;
  getMenuItemDataForRevision: () => DataItem[];
};

export const useMenuItemStore = create<MenuStore>((set, get) => ({
  formData: {
    name: '',
    description: '',
    category: 'FOOD',
    price: '0',
    ingredients: [],
    coffeeShopId: '',
    image: undefined
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
        ingredients: [],
        coffeeShopId: '',
        image: ''
      }
    }),
  updateIngredients: (ingredients) =>
    set((state) => ({
      formData: { ...state.formData, ingredients }
    })),
  updateImage: (imageBase64) =>
    set((state) => ({
      formData: { ...state.formData, image: imageBase64 }
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
        value:
          formData.ingredients
            .map((ing) => `${ing.ingredientTypeId} (${ing.quantity})`)
            .join(', ') || 'N/A'
      }
    ];
  }
}));
