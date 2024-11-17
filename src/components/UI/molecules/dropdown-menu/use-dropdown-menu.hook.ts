import { useEffect, useRef, useState } from 'react';

type MenuItem = {
  label: string;
  onClick?: () => void;
  submenu?: MenuItem[];
};

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

  const handleOnClick = (item: MenuItem, index: number) => {
    item.onClick || handleSubmenuToggle(index);

    toggle();
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
