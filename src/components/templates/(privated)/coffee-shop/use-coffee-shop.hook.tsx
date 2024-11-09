'use client';

import { ColumnInterface } from '@/components/UI/organism/table/interfaces/column.interface';
import { RowActionsInterface } from '@/components/UI/organism/table/interfaces/row-actions.interface';
import { TableDataAtom } from '@/components/UI/organism/table/UI/atoms/table-data/table-data.atom';
import { usePageSearchHook } from '@/hooks/use-page-search.hook';
import { useSearchDebounceHook } from '@/hooks/use-search-debounce.hook';
import { icons } from '@/icons/icons';
import { CoffeeShopPage } from '@/interfaces/coffee-shop/coffee-shop-page.interface';
import { CoffeeShopService } from '@/services/coffee-shop/coffee-shop.service';
import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

export const useCoffeeShopListHook = () => {
  const [{ page, search }, setPageSearch] = usePageSearchHook();
  const debouncedSearch = useSearchDebounceHook({ value: search, delay: 500 }); // 500ms de atraso

  const router = useRouter();

  const handleAdicionar = () => router.push('/coffee-shops/create/step-1');

  const { data: coffeeShopsData } = useQuery({
    queryKey: ['coffeeShops', page, debouncedSearch],
    queryFn: () =>
      CoffeeShopService.findAll({
        page,
        size: 5,
        search
      }).then((data) => {
        setPageSearch({ page: data.number });
        return data;
      })
  });

  const columns: ColumnInterface<CoffeeShopPage>[] = [
    {
      value: 'ID',
      key: 'id'
    },
    {
      value: 'Nome Empresa',
      key: 'name'
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
      key: 'representativeName'
    },
    {
      value: 'Status',
      key: 'status',
      render: ({ status }: CoffeeShopPage) => (
        <TableDataAtom.Status value={status} />
      )
    }
  ];

  const rowActions: RowActionsInterface<CoffeeShopPage>[] = [
    {
      icon: icons.Edit,
      onClick: (item: CoffeeShopPage) => {
        router.push(`/coffee-shops/edit/${item.id}`);
      }
    },
    {
      icon: icons.Ellipsis.Vertical,
      onClick: (item: CoffeeShopPage) => {
        console.log('More options', item);
      }
    },
    {
      icon: icons.Chevron.Right,
      onClick: (item: CoffeeShopPage) => {
        router.push(`/coffee-shops/read/${item.id}`);
      }
    }
  ];

  return {
    handleAdicionar,
    columns,
    rowActions,
    coffeeShopsData,
    setPageSearch,
    search
  };
};
