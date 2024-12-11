import { StatusType } from '@/types/status.type';

export interface MenuItemIngredient {
  ingredientTypeId: number;
  quantity: number;
}

export interface MenuItemInterface {
  id: number;
  name: string;
  description: string;
  category: 'FOOD' | 'DRINK';
  image: string;
  price: number;
  status: StatusType;
  coffeeShopId: number;
  ingredients: MenuItemIngredient[];
}
