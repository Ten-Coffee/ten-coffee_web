import { IngredientsTypeInterface } from '@/interfaces/ingredients-type/ingredients-type.interface';

export interface EditIngredientsInterface
  extends Omit<IngredientsTypeInterface, 'id' | 'status'> {}
