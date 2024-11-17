import { TableInterface } from '@/interfaces/tables/table.interface';
import { ApiService } from '@/services/api-base.service';

const tableApi = new ApiService('/tables');

const create = async (data: TableInterface): Promise<void> => {
  return await tableApi.request<void>('', {
    method: 'POST',
    body: data
  });
};

export const TablesService = {
  create
};
