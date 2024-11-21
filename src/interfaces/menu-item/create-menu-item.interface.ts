export interface CreateMenuItemInterface {
  name: string;
  description?: string;
  category: 'FOOD' | 'DRINK';
  price: number;
  ingredientsName: string[];
  coffeeShopId: number; // Adiciona o ID da cafeteria
}
