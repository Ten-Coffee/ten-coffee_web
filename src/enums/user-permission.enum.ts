export enum UserPermissionEnum {
  REPRESENTATIVE = 'REPRESENTATIVE',
  MANAGER = 'MANAGER',
  WAITER = 'WAITER',
  KITCHEN = 'KITCHEN',
  BAR = 'BAR'
}

export const getPermissionLabel = {
  [UserPermissionEnum.REPRESENTATIVE]: 'Representante',
  [UserPermissionEnum.MANAGER]: 'Gerente',
  [UserPermissionEnum.WAITER]: 'Garçom',
  [UserPermissionEnum.KITCHEN]: 'Cozinha',
  [UserPermissionEnum.BAR]: 'Bar'
};
