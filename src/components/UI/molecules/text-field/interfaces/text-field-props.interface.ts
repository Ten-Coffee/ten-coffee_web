import { ComponentProps, ElementType } from 'react';

export interface TextFieldProps extends ComponentProps<'div'> {
  label: string;
  icon?: ElementType;
  position?: 'left' | 'right';
  labelSize?: 'small' | 'medium' | 'large';
}
