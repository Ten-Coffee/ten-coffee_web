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
        path: '/coffee-shop'
      },
      {
        icon: icons.Users,
        value: 'Usuários',
        path: '/user'
      }
    ]
  };

  return { buildingBlocks: buildingBlocksAvailable[userAccess] || null };
};
