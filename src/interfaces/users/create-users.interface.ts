import { UserPermissionEnum } from '@/enums/user-permission.enum';

export interface CreateUsersInterface {
  name: string;
  login: string;
  userPermissionEnum: UserPermissionEnum;
  password: string;
  phone?: string;
  cpf?: string;
  coffeeShopId: number;
}
