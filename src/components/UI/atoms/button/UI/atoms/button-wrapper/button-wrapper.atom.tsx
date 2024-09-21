import './button-wrapper.style.scss';
import { ButtonHierarchy } from '@/components/UI/atoms/button/types/button-hierarchy.type';
import { ComponentProps, ReactNode } from 'react';

interface ButtonWrapperAtomProps extends ComponentProps<'button'> {
  children: ReactNode;
  hierarchy: ButtonHierarchy;
}

export const ButtonWrapperAtom = ({
  children,
  hierarchy,
  ...props
}: ButtonWrapperAtomProps) => {
  return (
    <button className={hierarchy} {...props}>
      {children}
    </button>
  );
};
