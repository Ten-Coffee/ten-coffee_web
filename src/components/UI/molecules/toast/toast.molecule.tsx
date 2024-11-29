'use client';

import { IconButtonAtom } from '@/components/UI/atoms/icon-button/icon-button.atom';
import { icons } from '@/icons/icons';
import { toastStore } from '@/store/toast.store';
import * as Toast from '@radix-ui/react-toast';
import './toast.styles.scss';

export interface ToastMoleculeProps {
  title: string;
  description?: string | Error;
  status?: 'success' | 'error' | 'info';
}

export const ToastMolecule = ({
  title,
  description,
  status = 'info'
}: ToastMoleculeProps) => {
  const { toggleToast, isOpen } = toastStore();

  return (
    <Toast.Root
      open={isOpen}
      className={`toast ${status}`}
      onOpenChange={toggleToast}
    >
      <div className={'toast__title-close'}>
        <Toast.Title className={'title-close__title'}>{title}</Toast.Title>

        <Toast.Close className={'title-close__close'}>
          <IconButtonAtom icon={icons.X} hierarchy={'ghosted'} size={'small'} />
        </Toast.Close>
      </div>
      {description && (
        <Toast.Description className={'toast__description'}>
          {typeof description === 'string' && description}
          {description instanceof Error && description.message}
        </Toast.Description>
      )}
    </Toast.Root>
  );
};
