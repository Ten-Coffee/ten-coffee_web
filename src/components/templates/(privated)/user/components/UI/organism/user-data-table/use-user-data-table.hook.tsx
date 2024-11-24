import { ColumnInterface } from '@/components/UI/organism/table/interfaces/column.interface';
import { RowActionsInterface } from '@/components/UI/organism/table/interfaces/row-actions.interface';
import { TableDataAtom } from '@/components/UI/organism/table/UI/atoms/table-data/table-data.atom';
import { getPermissionLabel } from '@/enums/user-permission.enum';
import { useDeleteModalHook } from '@/hooks/use-delete-modal.hook';
import { usePageSearchHook } from '@/hooks/use-page-search.hook';
import { useSearchDebounceHook } from '@/hooks/use-search-debounce.hook';
import { icons } from '@/icons/icons';
import { UsersInterface } from '@/interfaces/users/users.interface';
import { UsersService } from '@/services/users/users.service';
import { PathParamsType } from '@/types/path-params.type';
import { getActionVerb } from '@/utils/get-action-verb.utils';
import { useQuery } from '@tanstack/react-query';
import { useParams, useRouter } from 'next/navigation';

const USER_TABLE_QUERY = 'user_table';

export const useUserDataTableHook = () => {
  const { id } = useParams<PathParamsType>();
  const [{ page, search }, setPageSearch] = usePageSearchHook();
  const debouncedSearch = useSearchDebounceHook({ value: search, delay: 500 });

  const router = useRouter();

  const { data: usersData } = useQuery({
    queryKey: [USER_TABLE_QUERY, page, debouncedSearch],
    queryFn: () =>
      UsersService.findAll(
        {
          page,
          size: 10,
          search
        },
        id
      ).then((data) => setPageSearch({ page: data.number }).then(() => data))
  });

  const modal = useDeleteModalHook<UsersInterface>(
    {
      title: (item) => `${getActionVerb(item?.status)} Usuário`,
      getDescription: (item) =>
        `Tem certeza que deseja ${getActionVerb(item?.status).toLowerCase()} o usuário "${item.name}"?`,
      mutationFn: UsersService.deleteById,
      buttonText: (item) => getActionVerb(item?.status)
    },
    USER_TABLE_QUERY
  );

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
      onClick: (item) => router.push(`/users/edit/step-1/${item.id}`)
    },
    {
      icon: icons.Trash,
      onClick: (item) => modal.onClickModal(item)
    },
    {
      icon: icons.Chevron.Right,
      onClick: (item) => router.push(`/users/read/${item.id}`)
    }
  ];

  return {
    columns,
    rowActions,
    usersData,
    setPageSearch,
    search,
    modal
  };
};
