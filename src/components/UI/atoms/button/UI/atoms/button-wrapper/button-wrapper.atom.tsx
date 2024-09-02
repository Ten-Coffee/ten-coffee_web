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
    <button className={hierarchy} {...props}>
      {children}
    </button>
  );
};
