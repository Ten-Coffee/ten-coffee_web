import { IngredientsInterface } from '@/interfaces/ingredients/ingredients.interface';

export interface CreateIngredientsInterface extends IngredientsInterface {
  ingredientTypeId: number;
}
