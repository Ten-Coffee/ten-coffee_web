import './sidebar.styles.scss';
import { LogoAtom } from '@/components/UI/atoms/logo/logo.atom';
import { SidebarIconAtom } from '@/components/UI/organism/sidebar/UI/atoms/sidebar-icon/sidebar-icon.atom';
import { BuildingBlockMolecule } from '@/components/UI/organism/sidebar/UI/molecules/building-block/building-block.molecule';
import { useSidebarHook } from '@/components/UI/organism/sidebar/use-sidebar.hook';

export const SidebarOrganism = () => {
  const { buildingBlocks } = useSidebarHook();

  return (
    <aside className={'sidebar'}>
      <LogoAtom />

      <SidebarIconAtom />

      <div className={'sidebar__building-blocks'}>
        {buildingBlocks.map((block) => (
          <BuildingBlockMolecule key={block.path} {...block} />
        ))}
      </div>
    </aside>
  );
};
