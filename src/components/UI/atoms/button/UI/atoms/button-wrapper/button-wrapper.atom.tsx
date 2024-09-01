import styles from './button-wrapper.module.scss';

import { ButtonHierarchy } from '@/components/UI/atoms/button/types/button-hierarchy.type';
import { ComponentProps, ReactNode } from 'react';

interface ButtonWrapperAtomPRops extends ComponentProps<'button'> {
  children: ReactNode;
  hierarchy: ButtonHierarchy;
}

export const ButtonWrapperAtom = ({
  children,
  hierarchy,
  ...props
}: ButtonWrapperAtomPRops) => {
  return (
    <button className={styles[hierarchy]} {...props}>
      {children}
    </button>
  );
};
