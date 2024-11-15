import { IconButtonHierarchy } from '@/components/UI/atoms/icon-button/types/icon-button-hierarchy.type';
import { Size } from '@/types/size.type';
import { ComponentProps, ElementType } from 'react';
import './icon-button.style.scss';

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
  const className = `${hierarchy} ${size}`;

  return (
    <button className={className} {...props}>
      <Icon />
    </button>
  );
};
