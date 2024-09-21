import { icons } from '@/icons/icons';
import { sidebarStore } from '@/store/sidebar.store';
import { ElementType } from 'react';

export const useSidebarIconHook = () => {
  const { toggleSidebar, isOpen } = sidebarStore();

  const icon: ElementType = isOpen ? icons.Chevrons.Left : icons.Chevrons.Right;

  return {
    toggleSidebar,
    icon
  };
};
