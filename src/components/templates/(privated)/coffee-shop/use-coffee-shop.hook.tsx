import { CoffeeShop } from './interfaces/coffee-shop.interface';

import { ColumnInterface } from '@/components/UI/organism/table/interfaces/column.interface';
import { RowActionsInterface } from '@/components/UI/organism/table/interfaces/row-actions.interface';
import { TableDataAtom } from '@/components/UI/organism/table/UI/atoms/table-data/table-data.atom';
import { icons } from '@/icons/icons';
import { useRouter } from 'next/navigation';

export const useCoffeeShopListHook = () => {
  const router = useRouter();

  const handleAdicionar = () => router.push('/coffee-shops/create/step-1');

  const columns: ColumnInterface<CoffeeShop>[] = [
    {
      value: 'ID',
      key: 'id'
    },
    {
      value: 'Nome Empresa',
      key: 'nomeEmpresa'
    },
    {
      value: 'CNPJ',
      key: 'cnpj'
    },
    {
      value: 'Email',
      key: 'email'
    },
    {
      value: 'Nome Representante',
      key: 'nomeRepresentante'
    },
    {
      value: 'Status',
      key: 'status',
      render: ({ status }: CoffeeShop) => (
        <TableDataAtom.Status value={status} />
      )
    }
  ];

  const empresas: CoffeeShop[] = [
    {
      id: 1,
      nomeEmpresa: 'Tech Solutions Ltda',
      cnpj: '12.345.678/0001-90',
      email: 'contato@techsolutions.com.br',
      nomeRepresentante: 'João Silva',
      status: 'ACTIVE'
    },
    {
      id: 2,
      nomeEmpresa: 'Inova Web',
      cnpj: '23.456.789/0001-10',
      email: 'contato@inovaweb.com',
      nomeRepresentante: 'Maria Oliveira',
      status: 'INACTIVE'
    }
  ];

  const rowActions: RowActionsInterface<CoffeeShop>[] = [
    {
      icon: icons.Edit,
      onClick: (item: CoffeeShop) => {
        router.push(`/coffee-shops/edit/${item.id}`);
      }
    },
    {
      icon: icons.Ellipsis.Vertical,
      onClick: (item: CoffeeShop) => {
        console.log('More options', item);
      }
    },
    {
      icon: icons.Chevron.Right,
      onClick: (item: CoffeeShop) => {
        router.push(`/coffee-shops/read/${item.id}`);
      }
    }
  ];

  return {
    handleAdicionar,
    columns,
    empresas,
    rowActions
  };
};
