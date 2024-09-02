import { ComponentProps, ElementType } from 'react';

export interface InputProps extends ComponentProps<'input'> {
  icon?: ElementType;
  position?: 'left' | 'right';
}
