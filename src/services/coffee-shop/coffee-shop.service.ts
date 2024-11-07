import { BASE_URL } from '@/constants/base-url.constant';
import { CoffeeShopInterface } from '@/interfaces/coffee-shop.interface';
import { createCoffeeShopInterface } from '@/interfaces/create-coffee-shop.interface';

const resourceUrl = BASE_URL + '/coffeeShops';

const createCoffeeShop = async (
  data: createCoffeeShopInterface
): Promise<createCoffeeShopInterface> => {
  const response = await fetch(resourceUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });

  if (!response.ok) {
    const errorMessage = await response.text();
    throw new Error(errorMessage);
  }

  return response.status !== 204 ? await response.json() : null;
};

const findById = async (id: string): Promise<CoffeeShopInterface> => {
  const parsedId = parseInt(id);

  const response = await fetch(`${resourceUrl}/${parsedId}`);

  if (!response.ok) {
    const errorMessage = await response.text();
    throw new Error(errorMessage);
  }

  return await response.json();
};

export const CoffeeShopService = {
  createCoffeeShop,
  findById
};
