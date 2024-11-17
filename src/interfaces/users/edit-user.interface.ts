import { UserPermissionEnum } from '@/enums/user-permission.enum';

export interface EditUserInterface {
  name?: string;
  phone?: string | null;
  permission?: UserPermissionEnum;
}
