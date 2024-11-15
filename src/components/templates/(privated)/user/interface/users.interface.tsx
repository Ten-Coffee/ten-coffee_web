import { StatusType } from '@/types/status.type';

export interface User {
  id: number;
  nome: string;
  permissionamento: string;
  email: string;
  unidade: string;
  status: StatusType;
}
