import { TableStatusEnum } from '@/enums/table-status.enum';
import {
  FindAllTables,
  TableInterface
} from '@/interfaces/tables/table.interface';
import { ApiService } from '@/services/api-base.service';

const tableApi = new ApiService('/tables');

const create = async (data: TableInterface): Promise<void> => {
  return await tableApi.request<void>('', {
    method: 'POST',
    body: data
  });
};

const findAll = async (status: string): Promise<FindAllTables[]> => {
  return await tableApi.request<FindAllTables[]>('/1', {
    queryParams: {
      status
    }
  });
};

const updateStatus = async (
  id: string,
  status: TableStatusEnum
): Promise<void> => {
  return await tableApi.request<void>(`/${id}`, {
    method: 'PUT',
    queryParams: {
      status
    }
  });
};

export const TablesService = {
  create,
  findAll,
  updateStatus
};
