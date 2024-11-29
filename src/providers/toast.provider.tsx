'use client';

import {
  ToastMolecule,
  ToastMoleculeProps
} from '@/components/UI/molecules/toast/toast.molecule';
import { toastStore } from '@/store/toast.store';
import * as Toast from '@radix-ui/react-toast';
import { createContext, ReactNode, useContext, useState } from 'react';

interface ToastContextProps {
  toast: (toastProps: ToastMoleculeProps) => void;
}

const ToastContext = createContext<ToastContextProps | undefined>(undefined);

export const ToastProvider = ({ children }: { children: ReactNode }) => {
  const [toastData, setToastData] = useState<ToastMoleculeProps | undefined>(
    undefined
  );
  const { toggleToast } = toastStore();

  const toast = (toastProps: ToastMoleculeProps) => {
    setToastData(toastProps);
    toggleToast();
  };

  return (
    <ToastContext.Provider value={{ toast }}>
      <Toast.Provider swipeDirection="right">
        {children}
        {toastData && (
          <ToastMolecule {...toastData} status={toastData.status || 'info'} />
        )}
        <Toast.Viewport className="ToastViewport" />
      </Toast.Provider>
    </ToastContext.Provider>
  );
};

export const useToastContext = () => {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error('useToastContext must be used within a ToastProvider');
  }

  return context;
};
