import { icons } from '@/icons/icons';
import { BuildingBlocksInterface } from '@/interfaces/sidebar/building-blocks.interface';

export const useSidebarWrapperHook = () => {
  const userAccess = 'admin';

  const buildingBlocksAvailable: BuildingBlocksInterface = {
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
      },
      {
        icon: icons.Inventory,
        value: 'Estoque',
        path: '/inventory'
      },
      {
        icon: icons.Ingredients,
        value: 'Tipo Insumo',
        path: '/ingredients'
      },
      {
        icon: icons.Menu,
        value: 'Cardápio',
        path: '/menu-items'
      }
    ]
  };

  return {
    buildingBlocks: buildingBlocksAvailable[userAccess] || null
  };
};
