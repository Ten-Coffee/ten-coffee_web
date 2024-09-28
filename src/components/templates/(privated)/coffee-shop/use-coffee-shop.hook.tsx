import { ColumnInterface } from '@/components/UI/organism/table/interfaces/column.interface';
import { RowActionsInterface } from '@/components/UI/organism/table/interfaces/row-actions.interface';
import { TableDataAtom } from '@/components/UI/organism/table/UI/atoms/table-data/table-data.atom';
import { icons } from '@/icons/icons';
import { useRouter } from 'next/navigation';

interface CoffeeShop {
  id: number;
  nomeEmpresa: string;
  cnpj: string;
  email: string;
  nomeRepresentante: string;
  status: boolean;
}

export const useCoffeeShopListHook = () => {
  const router = useRouter();

  const handleAdicionar = () => {
    router.push('/coffee-shop/create/step-1');
  };

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
      status: true
    },
    {
      id: 2,
      nomeEmpresa: 'Inova Web',
      cnpj: '23.456.789/0001-10',
      email: 'contato@inovaweb.com',
      nomeRepresentante: 'Maria Oliveira',
      status: false
    },
    {
      id: 3,
      nomeEmpresa: 'Global Tech',
      cnpj: '34.567.890/0001-11',
      email: 'contato@globaltech.com',
      nomeRepresentante: 'Carlos Pereira',
      status: true
    },
    {
      id: 4,
      nomeEmpresa: 'Desenvolve TI',
      cnpj: '45.678.901/0001-12',
      email: 'contato@desenvolveti.com',
      nomeRepresentante: 'Ana Souza',
      status: false
    },
    {
      id: 5,
      nomeEmpresa: 'Consultoria & Soluções',
      cnpj: '56.789.012/0001-13',
      email: 'contato@consultoriasolucoes.com',
      nomeRepresentante: 'Ricardo Santos',
      status: true
    },
    {
      id: 6,
      nomeEmpresa: 'Future Tech',
      cnpj: '67.890.123/0001-14',
      email: 'contato@futuretech.com.br',
      nomeRepresentante: 'Paula Mendes',
      status: true
    },
    {
      id: 7,
      nomeEmpresa: 'Bright Innovations',
      cnpj: '78.901.234/0001-15',
      email: 'contato@brightinnovations.com',
      nomeRepresentante: 'Roberto Lima',
      status: false
    },
    {
      id: 8,
      nomeEmpresa: 'Alpha Solutions',
      cnpj: '89.012.345/0001-16',
      email: 'contato@alphasolutions.com',
      nomeRepresentante: 'Fernanda Costa',
      status: false
    },
    {
      id: 9,
      nomeEmpresa: 'Delta Tech',
      cnpj: '90.123.456/0001-17',
      email: 'contato@deltatech.com.br',
      nomeRepresentante: 'Leonardo Alves',
      status: true
    },
    {
      id: 10,
      nomeEmpresa: 'Visionary Systems',
      cnpj: '01.234.567/0001-18',
      email: 'contato@visionarysystems.com',
      nomeRepresentante: 'Juliana Duarte',
      status: true
    },
    {
      id: 11,
      nomeEmpresa: 'NextGen Tech',
      cnpj: '11.223.334/0001-19',
      email: 'contato@nextgentech.com.br',
      nomeRepresentante: 'Gabriel Moura',
      status: false
    },
    {
      id: 12,
      nomeEmpresa: 'Smart Solutions',
      cnpj: '22.334.445/0001-20',
      email: 'contato@smartsolutions.com.br',
      nomeRepresentante: 'Camila Rocha',
      status: false
    },
    {
      id: 13,
      nomeEmpresa: 'Prime Innovations',
      cnpj: '33.445.556/0001-21',
      email: 'contato@primeinnovations.com',
      nomeRepresentante: 'Pedro Fonseca',
      status: true
    },
    {
      id: 14,
      nomeEmpresa: 'Tech Vision',
      cnpj: '44.556.667/0001-22',
      email: 'contato@techvision.com.br',
      nomeRepresentante: 'Mariana Barbosa',
      status: false
    },
    {
      id: 15,
      nomeEmpresa: 'Innovatech',
      cnpj: '55.667.778/0001-23',
      email: 'contato@innovatech.com',
      nomeRepresentante: 'Felipe Nunes',
      status: false
    },
    {
      id: 16,
      nomeEmpresa: 'Solução Rápida',
      cnpj: '66.778.889/0001-24',
      email: 'contato@solucaorapida.com',
      nomeRepresentante: 'Thiago Moreira',
      status: true
    },
    {
      id: 17,
      nomeEmpresa: 'Infinity Tech',
      cnpj: '77.889.990/0001-25',
      email: 'contato@infinitytech.com.br',
      nomeRepresentante: 'Lucas Costa',
      status: true
    },
    {
      id: 18,
      nomeEmpresa: 'Ultra Tech',
      cnpj: '88.990.101/0001-26',
      email: 'contato@ultratech.com',
      nomeRepresentante: 'Isabela Lima',
      status: false
    },
    {
      id: 19,
      nomeEmpresa: 'Dynamic Systems',
      cnpj: '99.101.212/0001-27',
      email: 'contato@dynamicsystems.com.br',
      nomeRepresentante: 'Rafael Souza',
      status: false
    },
    {
      id: 20,
      nomeEmpresa: 'Mega Solutions',
      cnpj: '10.212.323/0001-28',
      email: 'contato@megasolutions.com.br',
      nomeRepresentante: 'Vanessa Martins',
      status: true
    }
  ];

  const rowActions: RowActionsInterface<CoffeeShop>[] = [
    {
      icon: icons.Edit,
      onClick: (item: CoffeeShop) => {
        router.push(`/coffee-shop/edit/${item.id}`);
      }
    },
    {
      icon: icons.Ellipsis.Vertical,
      onClick: (item: CoffeeShop) => {
        console.log('More options', item);
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
