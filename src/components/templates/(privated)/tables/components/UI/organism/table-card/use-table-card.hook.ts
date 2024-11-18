import {
  getTableStatusLabel,
  TableStatusEnum
} from '@/enums/table-status.enum';
import { DropdownMenuItemType } from '@/types/dropdown-menu-item.type';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

interface UseTableCardHookProps {
  status: TableStatusEnum;
}

export const useTableCardHook = ({ status }: UseTableCardHookProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const toggle = () => setIsOpen(!isOpen);

  const submenu: DropdownMenuItemType[] = Object.values(TableStatusEnum)
    .filter((step) => step !== status)
    .map((step) => ({
      label: getTableStatusLabel[step],
      onClick: () => console.log(`Alterar status para ${step}`)
    }));

  const menuItems: DropdownMenuItemType[] = [
    {
      label: 'Alterar Status',
      onClick: () => {},
      submenu
    },
    {
      label: 'Ver pedidos',
      onClick: (id: string) => {
        router.push(`/tables/read/${id}`);
      }
    }
  ];

  return {
    dropdown: {
      menuItems,
      isOpen,
      toggle
    }
  };
};
