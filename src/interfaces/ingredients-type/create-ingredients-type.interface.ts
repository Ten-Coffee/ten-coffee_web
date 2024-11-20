import { IngredientsTypeInterface } from '@/interfaces/ingredients-type/ingredients-type.interface';

export interface CreateIngredientsTypeInterface
  extends Omit<IngredientsTypeInterface, 'id' | 'status'> {
  coffeeShopId: number;
}
