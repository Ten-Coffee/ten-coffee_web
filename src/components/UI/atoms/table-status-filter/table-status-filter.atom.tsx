'use client';

import {
  getTableStatusLabel,
  TableStatusEnum
} from '@/enums/table-status.enum';
import { useTableStatusFilterHook } from '@/hooks/use-table-status-filter.hook';
import React from 'react';
import './table-status-filter.styles.scss';

interface TableStatusFilterAtomProps {
  status: TableStatusEnum;
  isCard?: boolean;
}

export const TableStatusFilterAtom = ({
  status,
  isCard
}: TableStatusFilterAtomProps) => {
  const [filters, setFilter] = useTableStatusFilterHook();

  const getFilterValue = filters[status];

  const handleToggle = () => {
    if (isCard) return;
    setFilter({
      ...filters,
      [status]: !getFilterValue
    });
  };

  const getClassForStatus = (status: TableStatusEnum): string => {
    const statusClassMap: Record<TableStatusEnum, string> = {
      [TableStatusEnum.FREE]: 'free',
      [TableStatusEnum.RESERVED]: 'reserved',
      [TableStatusEnum.OCCUPIED]: 'occupied',
      [TableStatusEnum.NO_SERVICE]: 'no-service'
    };

    return statusClassMap[status] || '';
  };

  return (
    <button
      className={`table-status-filter ${getClassForStatus(status)} ${
        isCard || getFilterValue ? 'active' : ''
      }`}
      onClick={handleToggle}
    >
      {getTableStatusLabel[status]}
    </button>
  );
};
