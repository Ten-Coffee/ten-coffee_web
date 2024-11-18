import { CreateTableInterface } from '@/interfaces/tables/create-table.interface';
import { TableInterface } from '@/interfaces/tables/table.interface';
import { ApiService } from '@/services/api-base.service';

const tableApi = new ApiService('/tables');

const create = async (data: CreateTableInterface): Promise<void> => {
  return await tableApi.request<void>('', {
    method: 'POST',
    body: data
  });
};

const findAll = async (status: string): Promise<TableInterface[]> => {
  return await tableApi.request<TableInterface[]>('/1', {
    queryParams: {
      status
    }
  });
};

const findById = async (id: string): Promise<TableInterface> => {
  return await tableApi.request<TableInterface>(`/find-by-id/${id}`);
};

export const TablesService = {
  create,
  findAll,
  findById
};
