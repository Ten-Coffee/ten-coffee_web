import './building-block-icon.style.scss';

import { ElementType } from 'react';

interface BuildingBlockIconAtomProps {
  icon: ElementType;
}

export const BuildingBlockIconAtom = ({
  icon: Icon
}: BuildingBlockIconAtomProps) => {
  return (
    <i className={'building-block-icon'}>
      <Icon className={'building-block-icon__icon'} />
    </i>
  );
};
