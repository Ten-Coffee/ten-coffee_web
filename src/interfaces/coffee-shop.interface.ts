
import { StatusType } from '@/type/status.type';


export interface CoffeeShopInterface {
  id: number;
  name: string;
  nameFantasy: string;
  cnpj: string;
  email: string;
  phoneNumber: string;
  contractStart: string;
  contractEnd: string;
  status: StatusType;
}
