import './label.style.scss';

import { Size } from '@/type/size.type';
import { ComponentProps } from 'react';

interface LabelAtomProps extends ComponentProps<'label'> {
  value: string | number;
  size: Size;
}

export const LabelAtom = ({ value, size }: LabelAtomProps) => {
  return <label className={`label__${size}`}>{value}</label>;
};
