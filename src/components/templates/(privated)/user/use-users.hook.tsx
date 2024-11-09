import { User } from './interface/users.interface';

import { ColumnInterface } from '@/components/UI/organism/table/interfaces/column.interface';
import { RowActionsInterface } from '@/components/UI/organism/table/interfaces/row-actions.interface';
import { TableDataAtom } from '@/components/UI/organism/table/UI/atoms/table-data/table-data.atom';
import { icons } from '@/icons/icons';
import { useRouter } from 'next/navigation';

export const useUserListHook = () => {
  const router = useRouter();

  const handleAdicionar = () => {
    router.push('/users/create/step-1');
  };

  const columns: ColumnInterface<User>[] = [
    {
      value: 'ID',
      key: 'id'
    },
    {
      value: 'Nome',
      key: 'nome'
    },
    {
      value: 'Permissão',
      key: 'permissionamento'
    },
    {
      value: 'Email',
      key: 'email'
    },
    {
      value: 'Unidade',
      key: 'unidade'
    },
    {
      value: 'Status',
      key: 'status',
      render: ({ status }: User) => <TableDataAtom.Status value={status} />
    }
  ];

  const usuarios: User[] = [
    {
      id: 1,
      nome: 'Alice Souza',
      permissionamento: 'Administrador',
      email: 'alice@empresa.com',
      unidade: 'Unidade Central',
      status: 'ACTIVE'
    },
    {
      id: 2,
      nome: 'Carlos Santos',
      permissionamento: 'Bar',
      email: 'carlos@empresa.com',
      unidade: 'Unidade Oeste',
      status: 'INACTIVE'
    },
    {
      id: 3,
      nome: 'Teste1000',
      permissionamento: 'Cozinha',
      email: 'Teste1000@empresa.com',
      unidade: 'TenCoffeee',
      status: 'ACTIVE'
    }
  ];

  const rowActions: RowActionsInterface<User>[] = [
    {
      icon: icons.Edit,
      onClick: (item: User) => {
        router.push(`adicione aqui o caminho ${item.id}`);
      }
    },
    {
      icon: icons.Ellipsis.Vertical,
      onClick: (item: User) => {
        console.log('More options', item);
      }
    }
  ];

  return {
    handleAdicionar,
    columns,
    usuarios,
    rowActions
  };
};
