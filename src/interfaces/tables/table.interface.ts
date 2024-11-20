import { TableStatusEnum } from '@/enums/table-status.enum';

export interface TableInterface {
  coffeeShopId: string;
  tablesNumber: number;
  counter: string;
}

export interface FindAllTables {
  id: string;
  number: number;
  lastTimeVisited: string;
  counter: string;
  tableStatus: TableStatusEnum;
}
