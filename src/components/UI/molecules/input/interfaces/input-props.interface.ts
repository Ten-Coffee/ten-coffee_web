import { MaskType } from '@/type/input-mask.type';
import { Position } from '@/type/position.type';
import { ComponentProps, ElementType } from 'react';

export interface InputProps extends ComponentProps<'input'> {
  icon?: ElementType;
  position?: Position;
  mask?: MaskType;
}
