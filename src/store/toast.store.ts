import { create } from 'zustand';

interface ToastStore {
  isOpen: boolean;
  toggleToast: () => void;
}

export const toastStore = create<ToastStore>(
  (set): ToastStore => ({
    isOpen: false,
    toggleToast: () => set((state) => ({ isOpen: !state.isOpen }))
  })
);
