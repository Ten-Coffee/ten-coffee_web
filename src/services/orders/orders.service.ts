import { OrdersInterface } from '@/interfaces/orders/orders.interface';
import { ApiService } from '@/services/api-base.service';

const ordersApi = new ApiService('/order');

const findByTableId = async (tableId: string): Promise<OrdersInterface[]> => {
  return await ordersApi.request<OrdersInterface[]>(`/table/${tableId}`);
};

export const OrdersService = {
  findByTableId
};
