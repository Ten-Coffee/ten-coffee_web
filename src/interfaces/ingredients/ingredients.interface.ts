import { StatusType } from '@/types/status.type';

export interface IngredientsInterface {
  id: number;
  name: string;
  amount: number;
  supplier: string;
  lastPurchase: string;
  dueDateClosed: string;
  dueDateOpen: string;
  status: StatusType;
  ingredientTypeId: number;
}
