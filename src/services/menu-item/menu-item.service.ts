import { CreateMenuItemInterface } from '@/interfaces/menu-item/create-menu-item.interface';
import { ApiService } from '@/services/api-base.service';

const menuItemApi = new ApiService('/menuItem');

const create = async (data: CreateMenuItemInterface): Promise<void> => {
  return await menuItemApi.request<void>('', {
    method: 'POST',
    body: data
  });
};

export const MenuItemService = {
  create
};
