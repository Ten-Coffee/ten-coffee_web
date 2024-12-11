export interface CreateMenuItemInterface {
  name: string;
  description?: string;
  category: 'FOOD' | 'DRINK';
  price: number;
  image?: string;
  ingredients: {
    ingredientTypeId: string;
    quantity: number;
  }[];
  coffeeShopId: number;
}
