import { DropdownMenuItemType } from '@/types/dropdown-menu-item.type';
import { useEffect, useRef, useState } from 'react';

interface UseDropdownMenuHookProps {
  toggle: () => void;
  isOpen?: boolean;
}

export const useDropdownMenuHook = ({
  toggle,
  isOpen
}: UseDropdownMenuHookProps) => {
  const [openSubmenu, setOpenSubmenu] = useState<number | null>(null);

  const handleSubmenuToggle = (index: number) => {
    setOpenSubmenu(openSubmenu === index ? null : index);
  };

  const handleOnClick = (
    item: DropdownMenuItemType,
    index: number,
    id: string
  ) => {
    if (item.onClick) {
      item.onClick(id);
      toggle();
    }
    if (item.submenu) {
      handleSubmenuToggle(index);
    }
  };

  const menuRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        toggle();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen, toggle]);

  return {
    menuRef,
    setOpenSubmenu,
    handleOnClick,
    openSubmenu
  };
};
