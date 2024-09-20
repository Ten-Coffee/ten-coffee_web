'use client';

import { icons } from '@/icons/icons';

export const useSidebarHook = () => {
  const userAccess = 'admin';

  const buildingBlocksAvailable = {
    admin: [
      {
        icon: icons.Home,
        value: 'Home',
        path: '/'
      },
      {
        icon: icons.Buildings,
        value: 'Unidades',
        path: '/unidades'
      }
    ]
  };

  return { buildingBlocks: buildingBlocksAvailable[userAccess] || null };
};
