import { PageParamsInterface } from '@/interfaces/page-params.interface';
import { PageableInterface } from '@/interfaces/pageable.interface';
import { CreateUsersInterface } from '@/interfaces/users/create-users.interface';
import { EditUserInterface } from '@/interfaces/users/edit-user.interface';
import { UpdatePasswordInterface } from '@/interfaces/users/update-password.interface';
import { UsersInterface } from '@/interfaces/users/users.interface';
import { ApiService } from '@/services/api-base.service';

const userApi = new ApiService('/users');

const findAll = async (
  { page = 0, size = 10, search = '' }: PageParamsInterface,
  coffeeShopId?: string
): Promise<PageableInterface<UsersInterface>> => {
  return await userApi.request<PageableInterface<UsersInterface>>('', {
    queryParams: {
      page,
      size,
      search,
      ...(coffeeShopId && { coffeeShopId })
    }
  });
};

const findById = async (id: string): Promise<UsersInterface> => {
  return await userApi.request<UsersInterface>(`/${id}`);
};

const create = async (data: CreateUsersInterface): Promise<void> => {
  await userApi.request<void, CreateUsersInterface>('', {
    method: 'POST',
    body: data
  });
};

const editById = async (id: string, data: EditUserInterface): Promise<void> => {
  await userApi.request<void, EditUserInterface>(`/${id}`, {
    method: 'PUT',
    body: data
  });
};

const deleteById = async (id: number): Promise<void> => {
  await userApi.request<void>(`/${id}`, {
    method: 'DELETE'
  });
};

const findRepresentative = async (
  coffeeShopId: string
): Promise<UsersInterface> => {
  return await userApi.request<UsersInterface>(
    `/representative/${coffeeShopId}`
  );
};

const updatePassword = async (
  id: string,
  data: UpdatePasswordInterface
): Promise<void> => {
  return await userApi.request<void>(`/${id}/password`, {
    method: 'PUT',
    body: data
  });
};

export const UsersService = {
  findAll,
  create,
  findById,
  editById,
  deleteById,
  findRepresentative,
  updatePassword
};
