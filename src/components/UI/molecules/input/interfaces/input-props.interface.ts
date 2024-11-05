import { MaskType } from '@/components/UI/molecules/input/UI/atoms/input/input.atom';
import { Position } from '@/type/position.type';
import { ComponentProps, ElementType } from 'react';

export interface InputProps extends ComponentProps<'input'> {
  icon?: ElementType;
  position?: Position;
  mask?: MaskType;
}
