import { BASE_URL } from '@/constants/base-url.constant';
import { CoffeeShopPage } from '@/interfaces/coffee-shop/coffee-shop-page.interface';
import { CoffeeShopInterface } from '@/interfaces/coffee-shop/coffee-shop.interface';
import { PageParamsInterface } from '@/interfaces/page-params.interface';
import { PageableInterface } from '@/interfaces/pageable.interface';

const resourceUrl = BASE_URL + '/coffeeShops';

const findById = async (id: string): Promise<CoffeeShopInterface> => {
  const parsedId = parseInt(id);

  const response = await fetch(resourceUrl + `/${parsedId}`);

  return await response.json();
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

export const CoffeeShopService = {
  findById,
  findAll
};
