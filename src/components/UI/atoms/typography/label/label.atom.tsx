import './label.style.scss';

import { Size } from '@/types/size.type';
import { ComponentProps } from 'react';

interface LabelAtomProps extends ComponentProps<'label'> {
  value: string | number | undefined;
  size: Size;
  disabled?: boolean;
}

export const LabelAtom = ({ value, size, disabled }: LabelAtomProps) => {
  return (
    <label className={`label__${size} ${disabled ? 'disabled' : ''}`}>
      {value}
    </label>
  );
};
