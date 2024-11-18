import { StatusType } from '@/types/status.type';

export interface EditCoffeeShopInterface {
  id?: number;
  name: string;
  nameFantasy: string;
  cnpj: string;
  email: string;
  phoneNumber: string;
  contractStart: string;
  contractEnd: string;
  status: StatusType;
}