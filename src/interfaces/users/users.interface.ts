import { UserPermissionEnum } from '@/enums/user-permission.enum';
import { StatusType } from '@/types/status.type';

export interface UsersInterface {
  id: number;
  name: string;
  permission: UserPermissionEnum;
  login: string;
  coffeeShopName: string;
  status: StatusType;
}
