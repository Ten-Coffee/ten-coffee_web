import './body.style.scss';

import { Size } from '@/types/size.type';
import { ComponentProps } from 'react';

interface BodyAtomProps extends ComponentProps<'p'> {
  value: string | number;
  size: Size;
}

export const BodyAtom = ({ value, size }: BodyAtomProps) => {
  return <p className={`body__${size}`}>{value}</p>;
};
