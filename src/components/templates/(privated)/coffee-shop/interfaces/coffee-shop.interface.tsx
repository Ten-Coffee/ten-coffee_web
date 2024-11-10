import { StatusType } from '@/types/status.type';

export interface CoffeeShop {
  id: number;
  nomeEmpresa: string;
  cnpj: string;
  email: string;
  nomeRepresentante: string;
  status: StatusType;
}
