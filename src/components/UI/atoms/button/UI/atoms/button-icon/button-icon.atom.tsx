import { ElementType } from 'react';
import './button-icon.style.scss';

interface ButtonIconAtomProps {
  icon: ElementType;
}

export const ButtonIconAtom = ({ icon: Icon }: ButtonIconAtomProps) => {
  return <Icon className={'button-icon'} />;
};
