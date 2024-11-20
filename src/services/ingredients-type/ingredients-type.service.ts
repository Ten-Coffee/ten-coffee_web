import { CreateIngredientsTypeInterface } from '@/interfaces/ingredients-type/create-ingredients-type.interface';
import { IngredientsTypeSummaryInterface } from '@/interfaces/ingredients-type/ingredients-type-summary.interface';
import { IngredientsTypeInterface } from '@/interfaces/ingredients-type/ingredients-type.interface';
import { PageParamsInterface } from '@/interfaces/page-params.interface';
import { PageableInterface } from '@/interfaces/pageable.interface';
import { SelectOptionsInterface } from '@/interfaces/select-options.interface';
import { ApiService } from '@/services/api-base.service';

const apiService = new ApiService('/ingredientsType');

const create = async (data: CreateIngredientsTypeInterface) => {
  return await apiService.request<void>('', {
    method: 'POST',
    body: data
  });
};

const findAll = async ({
  page = 0,
  size = 10,
  search = ''
}: PageParamsInterface): Promise<
  PageableInterface<IngredientsTypeInterface>
> => {
  return await apiService.request<PageableInterface<IngredientsTypeInterface>>(
    '',
    {
      queryParams: {
        page,
        size,
        search
      }
    }
  );
};

const findSummaries = async (
  search = ''
): Promise<SelectOptionsInterface[]> => {
  const response = await apiService.request<IngredientsTypeSummaryInterface[]>(
    '/summary/1',
    {
      queryParams: {
        search
      }
    }
  );

  return response.map(({ id, name }) => ({
    id,
    value: name
  }));
};

export const IngredientsTypeService = {
  create,
  findAll,
  findSummaries
};
