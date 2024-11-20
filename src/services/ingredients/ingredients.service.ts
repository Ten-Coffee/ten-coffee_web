import { CreateIngredientsInterface } from '@/interfaces/ingredients/create-ingredients.interface';
import { ApiService } from '@/services/api-base.service';

const apiService = new ApiService('/ingredientsType');

const create = async (data: CreateIngredientsInterface) => {
  return await apiService.request<void>('', {
    method: 'POST',
    body: data
  });
};

export const IngredientsService = {
  create
};
