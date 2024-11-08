import './label.style.scss';

import { Size } from '@/types/size.type';
import { ComponentProps } from 'react';

interface LabelAtomProps extends ComponentProps<'label'> {
  value: string | number | undefined;
  size: Size;
}

export const LabelAtom = ({ value, size }: LabelAtomProps) => {
  return <label className={`label__${size}`}>{value}</label>;
};
