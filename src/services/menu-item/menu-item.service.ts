import { CreateMenuItemInterface } from '@/interfaces/menu-item/create-menu-item.interface';
import { EditIngredientDataInterface } from '@/interfaces/menu-item/edit-ingredient-data.interface';
import { EditMenuItemInterface } from '@/interfaces/menu-item/edit-item-menu-interface';
import { MenuItemInterface } from '@/interfaces/menu-item/menu-item.interface';
import { PageParamsInterface } from '@/interfaces/page-params.interface';
import { PageableInterface } from '@/interfaces/pageable.interface';
import { ApiService } from '@/services/api-base.service';

const menuItemApi = new ApiService('/menuItem');

const create = async (data: CreateMenuItemInterface): Promise<void> => {
  return await menuItemApi.request<void>('', {
    method: 'POST',
    body: data
  });
};
const findAll = async ({
  page = 0,
  size = 10,
  search = ''
}: PageParamsInterface): Promise<PageableInterface<MenuItemInterface>> => {
  return await menuItemApi.request<PageableInterface<MenuItemInterface>>('', {
    queryParams: {
      page,
      size,
      search
    }
  });
};
const deleteById = async (id: number): Promise<void> => {
  if (!id) return;

  return await menuItemApi.request<void>(`/${id}`, {
    method: 'DELETE'
  });
};
const editById = async (
  id: string,
  data: EditMenuItemInterface
): Promise<void> => {
  return await menuItemApi.request<void>(`/${id}`, {
    method: 'PUT',
    body: data
  });
};
const findById = async (id: string): Promise<MenuItemInterface> => {
  return await menuItemApi.request<MenuItemInterface>(`/${id}`);
};

const editIngredientById = async (
  menuItemId: string,
  ingredientTypeId: number,
  data: EditIngredientDataInterface
): Promise<void> => {
  return await menuItemApi.request<void>(
    `/${menuItemId}/ingredient/${ingredientTypeId}`,
    {
      method: 'PUT',
      body: data
    }
  );
};

export const MenuItemService = {
  create,
  findAll,
  deleteById,
  editById,
  findById,
  editIngredientById
};
