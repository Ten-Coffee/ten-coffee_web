import { CreateIngredientsInterface } from '@/interfaces/ingredients/create-ingredients.interface';
import { IngredientsInterface } from '@/interfaces/ingredients/ingredients.interface';
import { PageParamsInterface } from '@/interfaces/page-params.interface';
import { PageableInterface } from '@/interfaces/pageable.interface';
import { ApiService } from '@/services/api-base.service';

const apiService = new ApiService('/ingredients');

const create = async (data: CreateIngredientsInterface): Promise<void> => {
  return await apiService.request<void>('', {
    method: 'POST',
    body: data
  });
};

const findAll = async ({
  page = 0,
  size = 10,
  search = ''
}: PageParamsInterface): Promise<PageableInterface<IngredientsInterface>> => {
  return await apiService.request<PageableInterface<IngredientsInterface>>('', {
    queryParams: {
      page,
      size,
      search,
      coffeeShopId: 1
    }
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

const editById = async (
  id: string,
  data: CreateIngredientsInterface
): Promise<void> => {
  return await apiService.request<void>(`/${id}`, {
    method: 'PUT',
    body: data
  });
};

export const IngredientsService = {
  create,
  findById,
  deleteById,
  editById,
  findAll
};
