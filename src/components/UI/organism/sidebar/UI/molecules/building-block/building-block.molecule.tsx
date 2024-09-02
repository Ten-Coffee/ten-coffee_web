'use client';

import './building-block.style.scss';
import { BuildingBlockIconAtom } from '@/components/UI/organism/sidebar/UI/atoms/building-block-icon/building-block-icon.atom';
import { BuildingBlockTextAtom } from '@/components/UI/organism/sidebar/UI/atoms/building-block-text/building-block-text.atom';
import { useBuildingBlockHook } from '@/components/UI/organism/sidebar/UI/molecules/building-block/use-building-block.hook';
import { sidebarStore } from '@/store/sidebar.store';
import { ElementType } from 'react';

interface BuildingBlockMoleculeProps {
  icon: ElementType;
  value: string;
  path: string;
}

export const BuildingBlockMolecule = ({
  icon,
  value,
  path
}: BuildingBlockMoleculeProps) => {
  const { isOpen } = sidebarStore();
  const { navigateToLink, thisBuildingBlockIsActive } = useBuildingBlockHook();
  const className = `building-block${thisBuildingBlockIsActive(path) ? '__active' : ''}`;

  return (
    <button className={className} onClick={() => navigateToLink(path)}>
      <BuildingBlockIconAtom icon={icon} />
      {isOpen && <BuildingBlockTextAtom value={value} />}
    </button>
  );
};
