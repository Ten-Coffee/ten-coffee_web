import {
  getTableStatusLabel,
  TableStatusEnum
} from '@/enums/table-status.enum';
import { TablesService } from '@/services/tables/tables.service';
import { DropdownMenuItemType } from '@/types/dropdown-menu-item.type';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

interface UseTableCardHookProps {
  status: TableStatusEnum;
}

export const useTableCardHook = ({ status }: UseTableCardHookProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const toggle = () => setIsOpen(!isOpen);

  const mutation = useMutation({
    mutationKey: ['updateTableStatus'],
    mutationFn: ({ id, status }: { id: string; status: TableStatusEnum }) =>
      TablesService.updateStatus(id, status)
  });

  const submenu: DropdownMenuItemType[] = Object.values(TableStatusEnum)
    .filter((step) => step !== status)
    .map((step) => ({
      label: getTableStatusLabel[step],
      onClick: async (id: string) =>
        await mutation.mutateAsync({ id, status: step })
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
