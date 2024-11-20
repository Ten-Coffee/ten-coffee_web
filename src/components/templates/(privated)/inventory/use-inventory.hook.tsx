import { ColumnInterface } from '@/components/UI/organism/table/interfaces/column.interface';
import { RowActionsInterface } from '@/components/UI/organism/table/interfaces/row-actions.interface';
import { TableDataAtom } from '@/components/UI/organism/table/UI/atoms/table-data/table-data.atom';
import { useDeleteModalHook } from '@/hooks/use-delete-modal.hook';
import { usePageSearchHook } from '@/hooks/use-page-search.hook';
import { useSearchDebounceHook } from '@/hooks/use-search-debounce.hook';
import { icons } from '@/icons/icons';
import { IngredientsInterface } from '@/interfaces/ingredients/ingredients.interface';
import { IngredientsService } from '@/services/ingredients/ingredient.service';
import { dateMask } from '@/utils/mask.utils';
import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

const INVENTORY_FIND_ALL_QUERY = 'inventory_find_all';

export const useInventoryHook = () => {
  const router = useRouter();
  const [{ page, search }, setPageSearch] = usePageSearchHook();
  const debouncedSearch = useSearchDebounceHook({ value: search, delay: 500 });

  const { data } = useQuery({
    queryKey: [INVENTORY_FIND_ALL_QUERY, page, debouncedSearch],
    queryFn: () =>
      IngredientsService.findAll({
        page,
        size: 10,
        search
      }).then((data) => setPageSearch({ page: data.number }).then(() => data))
  });

  const getActionVerb = (status: string) =>
    status === 'ACTIVE' ? 'Inativar' : 'Ativar';

  const modal = useDeleteModalHook<IngredientsInterface>(
    {
      title: (item) => `${getActionVerb(item?.status)} Ingrediente`,
      getDescription: (item) =>
        `Tem certeza que deseja ${getActionVerb(item?.status).toLowerCase()} o ingrediente "${item.name}"?`,
      mutationFn: IngredientsService.deleteById,
      buttonText: (item) => getActionVerb(item?.status)
    },
    INVENTORY_FIND_ALL_QUERY
  );

  const columns: ColumnInterface<IngredientsInterface>[] = [
    {
      value: 'ID',
      key: 'id'
    },
    {
      value: 'Nome',
      key: 'name'
    },
    {
      value: 'Quantidade',
      key: 'amount'
    },
    {
      value: 'Última Compra',
      key: 'lastPurchase',
      render: ({ lastPurchase }) => (
        <TableDataAtom.Default value={dateMask(lastPurchase)} />
      )
    },
    {
      value: 'Status',
      key: 'status',
      render: ({ status }: IngredientsInterface) => (
        <TableDataAtom.Status value={status} />
      )
    }
  ];

  const rowActions: RowActionsInterface<IngredientsInterface>[] = [
    {
      icon: icons.Edit,
      onClick: (item) => router.push(`/inventory/edit/step-1/${item.id}`)
    },
    {
      icon: icons.Trash,
      onClick: (item) => modal.onClickModal(item)
    },
    {
      icon: icons.Chevron.Right,
      onClick: (item) => router.push(`/inventory/read/${item.id}`)
    }
  ];

  return {
    onAdd: () => router.push('/inventory/create/step-1'),
    modal,
    inventory: {
      data,
      columns,
      rowActions
    },
    search,
    setPageSearch
  };
};
