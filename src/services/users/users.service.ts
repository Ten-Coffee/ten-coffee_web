import { BASE_URL } from '@/constants/base-url.constant';
import { PageParamsInterface } from '@/interfaces/page-params.interface';
import { PageableInterface } from '@/interfaces/pageable.interface';
import { CreateUsersInterface } from '@/interfaces/users/create-users.interface';
import { UsersInterface } from '@/interfaces/users/users.interface';

const resourceUrl = BASE_URL + '/users';

const findAll = async (
  { page = 0, size = 10, search = '' }: PageParamsInterface,
  coffeeShopId?: string
): Promise<PageableInterface<UsersInterface>> => {
  const urlParams = new URLSearchParams({
    page: page.toString(),
    size: size.toString(),
    search
  });

  if (coffeeShopId) {
    urlParams.append('coffeeShopId', coffeeShopId);
  }

  const response = await fetch(resourceUrl + '?' + urlParams.toString());

  return await response.json();
};

const findById = async (id: string): Promise<UsersInterface> => {
  const response = await fetch(resourceUrl + '/' + id);

  return await response.json();
};

const create = async (data: CreateUsersInterface): Promise<void> => {
  const response = await fetch(resourceUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });

  return await response.json();
};

export const UsersService = {
  findAll,
  create,
  findById
};
