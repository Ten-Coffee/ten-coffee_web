import { TableStatusEnum } from '@/enums/table-status.enum';

export interface TableInterface {
  id: string;
  number: number;
  lastTimeVisited: string;
  counter: string;
  tableStatus: TableStatusEnum;
}
