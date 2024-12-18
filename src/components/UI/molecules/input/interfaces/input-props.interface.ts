import { MaskType } from '@/types/input-mask.type';
import { Position } from '@/types/position.type';
import { ComponentProps, ElementType } from 'react';

export interface InputProps extends ComponentProps<'input'> {
  icon?: ElementType;
  position?: Position;
  mask?: MaskType;
}
