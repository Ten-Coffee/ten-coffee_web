import { ColumnInterface } from '@/components/UI/organism/table/interfaces/column.interface';
import { RowActionsInterface } from '@/components/UI/organism/table/interfaces/row-actions.interface';
import { TableDataAtom } from '@/components/UI/organism/table/UI/atoms/table-data/table-data.atom';
import { measurementNames } from '@/enums/measurement.enum';
import { useDeleteModalHook } from '@/hooks/use-delete-modal.hook';
import { usePageSearchHook } from '@/hooks/use-page-search.hook';
import { useSearchDebounceHook } from '@/hooks/use-search-debounce.hook';
import { icons } from '@/icons/icons';
import { IngredientsTypeInterface } from '@/interfaces/ingredients-type/ingredients-type.interface';
import { IngredientsTypeService } from '@/services/ingredients-type/ingredients-type.service';
import { getActionVerb } from '@/utils/get-action-verb.utils';
import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

const INGREDIENTS_FIND_ALL_KEY = 'ingredients-type-type-find-all';

export const useIngredientsHook = () => {
  const [{ page, search }, setPageSearch] = usePageSearchHook();
  const debouncedSearch = useSearchDebounceHook({ value: search, delay: 500 });

  const router = useRouter();

  const { data, isLoading } = useQuery({
    queryKey: [INGREDIENTS_FIND_ALL_KEY, page, debouncedSearch],
    queryFn: () =>
      IngredientsTypeService.findAll({
        page,
        size: 10,
        search
      }).then((data) => setPageSearch({ page: data.number }).then(() => data))
  });

  const modal = useDeleteModalHook<IngredientsTypeInterface>(
    {
      title: (item) => `${getActionVerb(item?.status)} Ingrediente`,
      getDescription: (item) =>
        `Tem certeza que deseja ${getActionVerb(item?.status).toLowerCase()} o ingrediente "${item.productName}"?`,
      mutationFn: IngredientsTypeService.deleteById,
      buttonText: (item) => getActionVerb(item?.status)
    },
    INGREDIENTS_FIND_ALL_KEY
  );

  const columns: ColumnInterface<IngredientsTypeInterface>[] = [
    {
      value: 'ID',
      key: 'id'
    },
    {
      value: 'Nome',
      key: 'productName'
    },
    {
      value: 'Tipo',
      key: 'category'
    },
    {
      value: 'Unidade de Medida',
      key: 'measurement',
      render: ({ measurement }: IngredientsTypeInterface) => (
        <TableDataAtom.Default value={measurementNames[measurement]} />
      )
    },
    {
      value: 'Descrição',
      key: 'description'
    },
    {
      value: 'Status',
      key: 'status',
      render: ({ status }: IngredientsTypeInterface) => (
        <TableDataAtom.Status value={status} />
      )
    }
  ];

  const rowActions: RowActionsInterface<IngredientsTypeInterface>[] = [
    {
      icon: icons.Edit,
      onClick: (item) => router.push(`/ingredients/edit/step-1/${item.id}`)
    },
    {
      icon: icons.Trash,
      onClick: (item) => modal.onClickModal(item)
    },
    {
      icon: icons.Chevron.Right,
      onClick: (item) => router.push(`/ingredients/read/${item.id}`)
    }
  ];

  return {
    handleAdd: () => router.push('/ingredients/create/step-1'),
    ingredients: {
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
