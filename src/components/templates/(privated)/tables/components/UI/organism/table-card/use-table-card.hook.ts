import {
  getTableStatusLabel,
  TableStatusEnum
} from '@/enums/table-status.enum';
import { useState } from 'react';

interface UseTableCardHookProps {
  status: TableStatusEnum;
}

export const useTableCardHook = ({ status }: UseTableCardHookProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const submenu = Object.values(TableStatusEnum)
    .filter((step) => step !== status)
    .map((step) => ({
      label: getTableStatusLabel[step],
      onClick: () => console.log(`${getTableStatusLabel[step]} selecionada`)
    }));

  const menuItems = [
    {
      label: 'Alterar Status',
      submenu
    },
    { label: 'Ver pedidos', onClick: () => console.log('Ver pedidos') }
  ];

  return {
    menuItems,
    isOpen,
    toggle
  };
};
