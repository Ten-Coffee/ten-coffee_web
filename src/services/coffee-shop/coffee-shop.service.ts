import { BASE_URL } from '@/constants/base-url.constant';
import { CoffeeShopInterface } from '@/interfaces/coffee-shop.interface';

const resourceUrl = BASE_URL + '/coffeeShops';

const findById = async (id: string): Promise<CoffeeShopInterface> => {
  const parsedId = parseInt(id);

  const response = await fetch(resourceUrl + `/${parsedId}`);

  return await response.json();
};

export const CoffeeShopService = {
  findById
};
