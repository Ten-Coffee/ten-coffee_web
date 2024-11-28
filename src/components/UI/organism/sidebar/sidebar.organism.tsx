import './sidebar.styles.scss';
import { LogoAtom } from '@/components/UI/atoms/logo/logo.atom';
import { SidebarIconAtom } from '@/components/UI/organism/sidebar/UI/atoms/sidebar-icon/sidebar-icon.atom';
import { BuildingBlockMolecule } from '@/components/UI/organism/sidebar/UI/molecules/building-block/building-block.molecule';
import { BuildingBlocksInterface } from '@/interfaces/sidebar/building-blocks.interface';

interface SidebarOrganismProps {
  buildingBlocks: BuildingBlocksInterface[0];
}

export const SidebarOrganism = ({ buildingBlocks }: SidebarOrganismProps) => {
  return (
    <aside className={'sidebar'}>
      <LogoAtom />

      <SidebarIconAtom />

      <div className={'sidebar__building-blocks'}>
        {buildingBlocks?.map((block) => (
          <BuildingBlockMolecule key={block.path} {...block} />
        ))}
      </div>
    </aside>
  );
};
