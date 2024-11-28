import { IconButtonAtom } from '@/components/UI/atoms/icon-button/icon-button.atom';
import { LogoAtom } from '@/components/UI/atoms/logo/logo.atom';
import { BuildingBlockMolecule } from '@/components/UI/organism/sidebar/UI/molecules/building-block/building-block.molecule';
import { icons } from '@/icons/icons';
import { BuildingBlocksInterface } from '@/interfaces/sidebar/building-blocks.interface';
import './sidebar-mobile.styles.scss';
import { sidebarStore } from '@/store/sidebar.store';

interface SidebarMobileOrganismProps {
  buildingBlocks: BuildingBlocksInterface[0];
}

export const SidebarMobileOrganism = ({
  buildingBlocks
}: SidebarMobileOrganismProps) => {
  const { isOpen, toggleSidebar } = sidebarStore();

  return (
    <>
      <div className={'sidebar-mobile__header'}>
        <IconButtonAtom
          onClick={toggleSidebar}
          icon={icons.SidebarMenu}
          hierarchy={'ghosted'}
          size={'medium'}
        />
        <LogoAtom />
      </div>

      {isOpen && (
        <>
          <div className={'sidebar-mobile__building-blocks'}>
            <div className={'building-blocks__close-sidebar'}>
              <IconButtonAtom
                onClick={toggleSidebar}
                icon={icons.X}
                hierarchy={'ghosted'}
                size={'medium'}
              />
            </div>
            {buildingBlocks?.map((block) => (
              <BuildingBlockMolecule key={block.path} {...block} />
            ))}
          </div>

          <div
            onClick={toggleSidebar}
            className={'sidebar-mobile__overlay'}
          ></div>
        </>
      )}
    </>
  );
};
