export enum TableStatusEnum {
  FREE = 'FREE',
  RESERVED = 'RESERVED',
  OCCUPIED = 'OCCUPIED',
  NO_SERVICE = 'NO_SERVICE'
}

export const getAllTableStatus = Object.values(TableStatusEnum);

export const getTableStatusLabel = {
  [TableStatusEnum.FREE]: 'Livre',
  [TableStatusEnum.RESERVED]: 'Reservada',
  [TableStatusEnum.OCCUPIED]: 'Ocupada',
  [TableStatusEnum.NO_SERVICE]: 'Sem atendimento'
};

export const getAllTableStatusLabel = Object.values(getTableStatusLabel);
