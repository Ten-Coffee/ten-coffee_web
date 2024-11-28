import { ElementType } from 'react';

export interface BuildingBlocksInterface {
  [key: string]: {
    icon: ElementType;
    value: string;
    path: string;
  }[];
}
