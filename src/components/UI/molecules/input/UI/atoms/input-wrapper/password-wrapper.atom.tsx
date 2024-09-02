import { ReactNode } from 'react';
import './input-wrapper.style.scss';

interface InputWrapperAtomProps {
  children: ReactNode;
}

export const InputWrapperAtom = ({ children }: InputWrapperAtomProps) => {
  return <div className={'input-wrapper'}>{children}</div>;
};
