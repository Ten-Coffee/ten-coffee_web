'use client';

import { TableStatusEnum } from '@/enums/table-status.enum';
import { parseAsBoolean, useQueryStates } from 'nuqs';

const defaultValue = true;

export const useTableStatusFilterHook = () => {
  return useQueryStates({
    [TableStatusEnum.FREE]: parseAsBoolean.withDefault(defaultValue),
    [TableStatusEnum.RESERVED]: parseAsBoolean.withDefault(defaultValue),
    [TableStatusEnum.OCCUPIED]: parseAsBoolean.withDefault(defaultValue),
    [TableStatusEnum.NO_SERVICE]: parseAsBoolean.withDefault(defaultValue)
  });
};
