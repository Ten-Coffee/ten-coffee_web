import { ElementType } from 'react';

export interface RowActionsInterface<T> {
  condition?: (item: T) => boolean;
  icon: ElementType;
  onClick: (item: T) => void;
}
