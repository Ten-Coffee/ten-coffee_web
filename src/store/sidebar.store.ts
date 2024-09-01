import { create } from 'zustand';

interface SidebarStore {
  isOpen: boolean;
  toggleSidebar: () => void;
}

export const sidebarStore = create<SidebarStore>(
  (set): SidebarStore => ({
    isOpen: false,
    toggleSidebar: () => set((state) => ({ isOpen: !state.isOpen }))
  })
);
