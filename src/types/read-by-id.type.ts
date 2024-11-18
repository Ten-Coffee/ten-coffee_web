import { TableStatusEnum } from '@/enums/table-status.enum';

export type ReadByIdType = {
  label: string;
  value: string | undefined;
  isStatus?: boolean;
  tableStatus?: TableStatusEnum;
};
