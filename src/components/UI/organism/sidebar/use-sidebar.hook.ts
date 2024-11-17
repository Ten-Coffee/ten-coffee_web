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
        path: '/coffee-shops'
      },
      {
        icon: icons.Users,
        value: 'Usuários',
        path: '/users'
      },
      {
        icon: icons.Table,
        value: 'Mesas',
        path: '/tables'
      }
    ]
  };

  return { buildingBlocks: buildingBlocksAvailable[userAccess] || null };
};
