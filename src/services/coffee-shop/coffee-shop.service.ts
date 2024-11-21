import { CoffeeShopPage } from '@/interfaces/coffee-shop/coffee-shop-page.interface';
import { CoffeeShopSummaryInterface } from '@/interfaces/coffee-shop/coffee-shop-summary.interface';
import { CoffeeShopInterface } from '@/interfaces/coffee-shop/coffee-shop.interface';
import { CreateCoffeeShopInterface } from '@/interfaces/coffee-shop/create-coffee-shop.interface';
import { EditCoffeeShopInterface } from '@/interfaces/coffee-shop/edit-coffee-shop.interface';
import { PageParamsInterface } from '@/interfaces/page-params.interface';
import { PageableInterface } from '@/interfaces/pageable.interface';
import { SelectOptionsInterface } from '@/interfaces/select-options.interface';
import { ApiService } from '@/services/api-base.service';

const apiService = new ApiService('/coffeeShops');

const create = async (data: CreateCoffeeShopInterface): Promise<void> => {
  await apiService.request<void>('', {
    method: 'POST',
    body: data
  });
};

const findById = async (id: string): Promise<CoffeeShopInterface> => {
  return await apiService.request<CoffeeShopInterface>(`/${id}`);
};

const editById = async (
  id: string,
  data: Partial<EditCoffeeShopInterface>
): Promise<void> => {
  await apiService.request<void>(`/${id}`, {
    method: 'PUT',
    body: data
  });
};

const deleteById = async (id: number): Promise<void> => {
  await apiService.request<void>(`/${id}`, {
    method: 'DELETE'
  });
};

const findAll = async ({
  page = 0,
  size = 10,
  search = ''
}: PageParamsInterface): Promise<PageableInterface<CoffeeShopPage>> => {
  return await apiService.request<PageableInterface<CoffeeShopPage>>('', {
    queryParams: { page, size, search }
  });
};

const findSummaries = async (
  search: string
): Promise<SelectOptionsInterface[]> => {
  const response = await apiService.request<CoffeeShopSummaryInterface[]>(
    '/summary',
    {
      queryParams: { search }
    }
  );

  return response.map(({ id, name }) => ({
    id,
    value: name
  }));
};

export const CoffeeShopService = {
  create,
  findById,
  findAll,
  editById,
  deleteById,
  findSummaries
};
