'use client';

import { SidebarMobileOrganism } from '@/components/UI/organism/sidebar-mobile/sidebar-mobile.organism';
import { useSidebarWrapperHook } from '@/components/UI/organism/sidebar-wrapper/use-sidebar-wrapper.hook';
import { SidebarOrganism } from '@/components/UI/organism/sidebar/sidebar.organism';

export const SidebarWrapperOrganism = () => {
  const { buildingBlocks, isDesktop } = useSidebarWrapperHook();

  return (
    <>
      {isDesktop && <SidebarOrganism buildingBlocks={buildingBlocks} />}
      {!isDesktop && <SidebarMobileOrganism buildingBlocks={buildingBlocks} />}
    </>
  );
};
