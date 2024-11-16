import { ColumnInterface } from '@/components/UI/organism/table/interfaces/column.interface';
import { RowActionsInterface } from '@/components/UI/organism/table/interfaces/row-actions.interface';
import { TableDataAtom } from '@/components/UI/organism/table/UI/atoms/table-data/table-data.atom';
import { getPermissionLabel } from '@/enums/user-permission.enum';
import { usePageSearchHook } from '@/hooks/use-page-search.hook';
import { useSearchDebounceHook } from '@/hooks/use-search-debounce.hook';
import { icons } from '@/icons/icons';
import { UsersInterface } from '@/interfaces/users/users.interface';
import { UsersService } from '@/services/users/users.service';
import { PathParamsType } from '@/types/path-params.type';
import { useQuery } from '@tanstack/react-query';
import { useParams, useRouter } from 'next/navigation';

export const useUserDataTableHook = () => {
  const { id } = useParams<PathParamsType>();
  const [{ page, search }, setPageSearch] = usePageSearchHook();
  const debouncedSearch = useSearchDebounceHook({ value: search, delay: 500 });

  const router = useRouter();

  const { data: usersData } = useQuery({
    queryKey: ['usersData', page, debouncedSearch],
    queryFn: () =>
      UsersService.findAll(
        {
          page,
          size: 10,
          search
        },
        id
      ).then((data) => {
        setPageSearch({ page: data.number });
        return data;
      })
  });

  const columns: ColumnInterface<UsersInterface>[] = [
    {
      value: 'ID',
      key: 'id'
    },
    {
      value: 'Nome',
      key: 'name'
    },
    {
      value: 'Permissão',
      key: 'permission',
      render: ({ permission }: UsersInterface) => (
        <TableDataAtom.Default value={getPermissionLabel[permission]} />
      )
    },
    {
      value: 'Login',
      key: 'login'
    },
    {
      value: 'Cafeteria',
      key: 'coffeeShopName'
    },
    {
      value: 'Status',
      key: 'status',
      render: ({ status }: UsersInterface) => (
        <TableDataAtom.Status value={status} />
      )
    }
  ];

  const rowActions: RowActionsInterface<UsersInterface>[] = [
    {
      icon: icons.Edit,
      onClick: (item: UsersInterface) => {
        router.push(`adicione aqui o caminho ${item.id}`);
      }
    },
    {
      icon: icons.Chevron.Right,
      onClick: (item: UsersInterface) => router.push(`/users/read/${item.id}`)
    }
  ];

  return {
    columns,
    rowActions,
    usersData,
    setPageSearch,
    search
  };
};
