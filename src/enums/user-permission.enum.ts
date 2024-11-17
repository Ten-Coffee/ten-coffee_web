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

export const getAllPermissionLabels = Object.values(getPermissionLabel);

export const filteredPermissionLabels = getAllPermissionLabels.filter(
  (label) => label !== 'Representante'
);

export const PERMISSION_ZOD_ENUM = filteredPermissionLabels as [
  string,
  ...string[]
];

export const filteredPermissionLabelsForSelect = filteredPermissionLabels.map(
  (label) => ({
    id: label,
    value: label
  })
);

export const EDIT_USER_ZOD_PERMISSION = getAllPermissionLabels as [
  string,
  ...string[]
];

export const permissionLabelsForSelect = getAllPermissionLabels.map(
  (label) => ({
    id: label,
    value: label
  })
);

export const mapPermission: { [key: string]: UserPermissionEnum } = {
  Representante: UserPermissionEnum.REPRESENTATIVE,
  Gerente: UserPermissionEnum.MANAGER,
  Garçom: UserPermissionEnum.WAITER,
  Cozinha: UserPermissionEnum.KITCHEN,
  Bar: UserPermissionEnum.BAR
};
