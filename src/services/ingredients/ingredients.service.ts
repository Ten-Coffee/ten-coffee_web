import { CreateIngredientsInterface } from '@/interfaces/ingredients/create-ingredients.interface';
import { IngredientsInterface } from '@/interfaces/ingredients/ingredients.interface';
import { PageParamsInterface } from '@/interfaces/page-params.interface';
import { PageableInterface } from '@/interfaces/pageable.interface';
import { ApiService } from '@/services/api-base.service';

const apiService = new ApiService('/ingredientsType');

const create = async (data: CreateIngredientsInterface) => {
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
      search
    }
  });
};

export const IngredientsService = {
  create,
  findAll
};
