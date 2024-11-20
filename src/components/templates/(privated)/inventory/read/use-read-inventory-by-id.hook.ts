import { useDeleteModalHook } from '@/hooks/use-delete-modal.hook';
import { IngredientsInterface } from '@/interfaces/ingredients/ingredients.interface';
import { IngredientsService } from '@/services/ingredients/ingredient.service';
import { PathParamsType } from '@/types/path-params.type';
import { ReadByIdType } from '@/types/read-by-id.type';
import { dateMask } from '@/utils/mask.utils';
import { useQuery } from '@tanstack/react-query';
import { useParams, useRouter } from 'next/navigation';

const READ_BY_ID_QUERY = 'read-ingredient-by-id';

export const useReadInventoryByIdHook = () => {
  const { id } = useParams<PathParamsType>();
  const router = useRouter();

  const { data, isLoading } = useQuery({
    queryKey: [READ_BY_ID_QUERY],
    queryFn: () => IngredientsService.findById(id),
    enabled: !!id
  });

  const modal = useDeleteModalHook<IngredientsInterface>(
    {
      title: 'Inativar Ingrediente',
      getDescription: (item) =>
        `Tem certeza que deseja inativar o ingrediente "${item.name}"?`,
      mutationFn: IngredientsService.deleteById,
      buttonText: 'Inativar'
    },
    READ_BY_ID_QUERY
  );

  const ingredientData: ReadByIdType[] = [
    {
      label: 'Nome',
      value: data?.name
    },
    {
      label: 'Quantidade',
      value: data?.amount?.toString()
    },
    {
      label: 'Tipo Ingrediente',
      value: ''
    },
    {
      label: 'Fornecedor',
      value: data?.supplier
    },
    {
      label: 'Última Compra',
      value: dateMask(data?.lastPurchase)
    },
    {
      label: 'Data de Validade (Aberta)',
      value: dateMask(data?.dueDateOpen)
    },
    {
      label: 'Data de Validade (Fechada)',
      value: dateMask(data?.dueDateClosed)
    },
    {
      label: 'Status',
      value: data?.status,
      isStatus: true
    }
  ];

  return {
    goBackPage: () => router.back(),
    ingredient: {
      data: ingredientData,
      isLoading
    },
    data,
    title: data?.name ?? 'Carregando...',
    modal
  };
};
