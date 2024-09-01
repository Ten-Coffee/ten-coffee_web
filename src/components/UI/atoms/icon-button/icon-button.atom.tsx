import styles from './icon-button.module.scss';

import { IconButtonHierarchy } from '@/components/UI/atoms/icon-button/types/icon-button-hierarchy.type';
import { Size } from '@/type/size.type';
import { ComponentProps, ElementType } from 'react';

interface IconButtonAtomProps extends ComponentProps<'button'> {
  icon: ElementType;
  hierarchy: IconButtonHierarchy;
  size: Size;
}

export const IconButtonAtom = ({
  icon: Icon,
  hierarchy,
  size,
  ...props
}: IconButtonAtomProps) => {
  const className = `${styles[hierarchy]} ${styles[size]}`;

  return (
    <button className={className} {...props}>
      <Icon />
    </button>
  );
};
