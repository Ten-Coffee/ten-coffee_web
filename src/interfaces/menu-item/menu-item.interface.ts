import { StatusType } from '@/types/status.type';

export interface MenuItemInterface {
  id: number;
  name: string;
  description: string;
  price: string;
  status: StatusType;
}
