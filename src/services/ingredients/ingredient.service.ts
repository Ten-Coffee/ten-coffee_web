import { IngredientsTypeSummaryInterface } from '@/interfaces/ingredients-type/ingredients-type-summary.interface';
import { CreateIngredientsInterface } from '@/interfaces/ingredients/create-ingredients.interface';
import { IngredientsInterface } from '@/interfaces/ingredients/ingredients.interface';
import { PageParamsInterface } from '@/interfaces/page-params.interface';
import { PageableInterface } from '@/interfaces/pageable.interface';
import { SelectOptionsInterface } from '@/interfaces/select-options.interface';
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
      coffeeShopId: 2
    }
  });
};
const findIngredients = async (
  search = ''
): Promise<SelectOptionsInterface[]> => {
  const response = await apiService.request<IngredientsTypeSummaryInterface[]>(
    '/summary/2',
    {
      queryParams: {
        search
      }
    }
  );

  return response.map(({ id, name }) => ({
    id,
    value: name // Mapeia o campo `name` para `value`
  }));
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
  findIngredients,
  deleteById,
  editById,
  findAll
};
