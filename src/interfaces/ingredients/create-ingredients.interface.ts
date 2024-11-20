import { IngredientsInterface } from '@/interfaces/ingredients/ingredients.interface';

export interface CreateIngredientsInterface
  extends Omit<IngredientsInterface, 'id' | 'status'> {
  coffeeShopId: number;
}
