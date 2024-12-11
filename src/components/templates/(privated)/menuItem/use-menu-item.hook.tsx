import { ColumnInterface } from '@/components/UI/organism/table/interfaces/column.interface';
import { RowActionsInterface } from '@/components/UI/organism/table/interfaces/row-actions.interface';
import { TableDataAtom } from '@/components/UI/organism/table/UI/atoms/table-data/table-data.atom';
import { useDeleteModalHook } from '@/hooks/use-delete-modal.hook';
import { usePageSearchHook } from '@/hooks/use-page-search.hook';
import { useSearchDebounceHook } from '@/hooks/use-search-debounce.hook';
import { icons } from '@/icons/icons';
import { MenuItemInterface } from '@/interfaces/menu-item/menu-item.interface';
import { MenuItemService } from '@/services/menu-item/menu-item.service';
import { getActionVerb } from '@/utils/get-action-verb.utils';
import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

const MENU_ITEM_FIND_ALL_KEY = 'menu-item-find-all';

export const useMenuItemHook = () => {
  const [{ page, search }, setPageSearch] = usePageSearchHook();
  const debouncedSearch = useSearchDebounceHook({ value: search, delay: 500 });
  const { data, isLoading } = useQuery({
    queryKey: [MENU_ITEM_FIND_ALL_KEY, page, debouncedSearch],
    queryFn: () =>
      MenuItemService.findAll({
        page,
        size: 10,
        search
      }).then((data) => setPageSearch({ page: data.number }).then(() => data))
  });
  const columns: ColumnInterface<MenuItemInterface>[] = [
    {
      value: 'ID',
      key: 'id'
    },
    {
      value: 'Nome',
      key: 'name'
    },
    {
      value: 'Descrição',
      key: 'description'
    },
    {
      value: 'Preço',
      key: 'price'
    },
    {
      value: 'Status',
      key: 'status',
      render: ({ status }: MenuItemInterface) => (
        <TableDataAtom.Status value={status} />
      )
    }
  ];

  const router = useRouter();

  const modal = useDeleteModalHook<MenuItemInterface>(
    {
      title: (item) => `${getActionVerb(item?.status)} Item`,
      getDescription: (item) =>
        `Tem certeza que deseja ${getActionVerb(item?.status).toLowerCase()} o item "${item.name}"?`,
      mutationFn: MenuItemService.deleteById,
      buttonText: (item) => getActionVerb(item?.status)
    },
    MENU_ITEM_FIND_ALL_KEY
  );

  const rowActions: RowActionsInterface<MenuItemInterface>[] = [
    {
      icon: icons.Edit,
      onClick: (item) => router.push(`/menu-items/edit/step-1/${item.id}`)
    },
    {
      icon: icons.Trash,
      onClick: (item) => modal.onClickModal(item)
    },
    {
      icon: icons.Chevron.Right,
      onClick: (item) => router.push(`/menu-items/read/${item.id}`)
    }
  ];

  return {
    onAdd: () => router.push('/menu-items/create/step-1'),
    menuItem: {
      data,
      columns,
      rowActions,
      isLoading
    },
    search,
    setPageSearch,
    modal
  };
};
