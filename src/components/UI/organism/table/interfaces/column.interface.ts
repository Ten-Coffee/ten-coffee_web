import { ReactNode } from 'react';

export interface ColumnInterface<T> {
  value: string;
  key: keyof T;
  render?: (item: T) => ReactNode;
}
