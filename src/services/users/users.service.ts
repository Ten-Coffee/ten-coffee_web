import { BASE_URL } from '@/constants/base-url.constant';
import { PageParamsInterface } from '@/interfaces/page-params.interface';
import { PageableInterface } from '@/interfaces/pageable.interface';
import { UsersInterface } from '@/interfaces/users/users.interface';

const resourceUrl = BASE_URL + '/users';

const findAll = async (
  { page = 0, size = 10, search = '' }: PageParamsInterface,
  coffeeShopId: string
): Promise<PageableInterface<UsersInterface>> => {
  const urlParams = new URLSearchParams({
    page: page.toString(),
    size: size.toString(),
    coffeeShopId,
    search
  });

  const response = await fetch(resourceUrl + '?' + urlParams.toString());

  return await response.json();
};

export const UsersService = {
  findAll
};
