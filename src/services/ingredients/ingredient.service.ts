import { CreateIngredientsInterface } from '@/interfaces/ingredients/create-ingredients.interface';
import { IngredientsInterface } from '@/interfaces/ingredients/ingredients.interface';
import { ApiService } from '@/services/api-base.service';

const apiService = new ApiService('/ingredients');

const create = async (data: CreateIngredientsInterface): Promise<void> => {
  return await apiService.request<void>('', {
    method: 'POST',
    body: data
  });
};

const findById = async (id: string): Promise<IngredientsInterface> => {
  return await apiService.request<IngredientsInterface>(`/${id}`);
};

const deleteById = async (id: number): Promise<void> => {
  if (!id) return;

  return await apiService.request<void>(`/${id}`, {
    method: 'DELETE'
  });
};

export const IngredientsService = {
  create,
  findById,
  deleteById
};
