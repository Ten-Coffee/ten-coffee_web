import { BASE_URL } from '@/constants/base-url.constant';
import { CoffeeShopPage } from '@/interfaces/coffee-shop/coffee-shop-page.interface';
import { CoffeeShopSummaryInterface } from '@/interfaces/coffee-shop/coffee-shop-summary.interface';
import { CoffeeShopInterface } from '@/interfaces/coffee-shop/coffee-shop.interface';
import { CreateCoffeeShopInterface } from '@/interfaces/coffee-shop/create-coffee-shop.interface';
import { PageParamsInterface } from '@/interfaces/page-params.interface';
import { PageableInterface } from '@/interfaces/pageable.interface';
import { SelectOptionsInterface } from '@/interfaces/select-options.interface';

const resourceUrl = BASE_URL + '/coffeeShops';

const create = async (data: CreateCoffeeShopInterface): Promise<void> => {
  const response = await fetch(resourceUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });

  return await response.json();
};

const findById = async (id: string): Promise<CoffeeShopInterface> => {
  const parsedId = parseInt(id);

  const response = await fetch(resourceUrl + `/${parsedId}`);

  return await response.json();
};

const deleteById = async (id: number): Promise<void> => {
  await fetch(resourceUrl + `/${id}`, {
    method: 'DELETE'
  });
};

const findAll = async ({
  page = 0,
  size = 10,
  search = ''
}: PageParamsInterface): Promise<PageableInterface<CoffeeShopPage>> => {
  const urlParams = new URLSearchParams({
    page: page.toString(),
    size: size.toString(),
    search
  });

  const response = await fetch(resourceUrl + '?' + urlParams.toString());

  return await response.json();
};

const findSummaries = async (
  search: string
): Promise<SelectOptionsInterface[]> => {
  const urlParams = new URLSearchParams({
    search
  });

  const response = await fetch(
    resourceUrl + '/summary' + '?' + urlParams.toString()
  );

  const convertedResponse: CoffeeShopSummaryInterface[] = await response.json();

  return convertedResponse.map(({ id, name }) => ({
    id,
    value: name
  }));
};

export const CoffeeShopService = {
  create,
  findById,
  findAll,
  deleteById,
  findSummaries
};
