import { TableInterface } from '@/interfaces/tables/table.interface';

export interface CreateTableInterface
  extends Pick<TableInterface, 'counter' | 'number'> {
  coffeeShopId: string;
}
