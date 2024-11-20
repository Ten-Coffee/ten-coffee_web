import { MeasurementEnum, measurementNames } from '@/enums/measurement.enum';
import { useDeleteModalHook } from '@/hooks/use-delete-modal.hook';
import { IngredientsTypeInterface } from '@/interfaces/ingredients-type/ingredients-type.interface';
import { IngredientsTypeService } from '@/services/ingredients-type/ingredients-type.service';
import { PathParamsType } from '@/types/path-params.type';
import { ReadByIdType } from '@/types/read-by-id.type';
import { useQuery } from '@tanstack/react-query';
import { useParams, useRouter } from 'next/navigation';

const READ_BY_ID_QUERY = 'read-ingredient-by-id';

export const useReadIngredientByIdHook = () => {
  const { id } = useParams<PathParamsType>();
  const router = useRouter();

  const { data, isLoading } = useQuery({
    queryKey: [READ_BY_ID_QUERY],
    queryFn: () => IngredientsTypeService.findById(id),
    enabled: !!id
  });

  const modal = useDeleteModalHook<IngredientsTypeInterface>(
    {
      title: 'Inativar Ingrediente',
      getDescription: (item) =>
        `Tem certeza que deseja inativar o ingrediente "${item.productName}"?`,
      mutationFn: IngredientsTypeService.deleteById,
      buttonText: 'Inativar'
    },
    READ_BY_ID_QUERY
  );

  const ingredientData: ReadByIdType[] = [
    {
      label: 'Nome',
      value: data?.productName
    },
    {
      label: 'Categoria',
      value: data?.category
    },
    {
      label: 'Unidade de Medida',
      value: measurementNames[data?.measurement || MeasurementEnum.CAIXA]
    },
    {
      label: 'Descrição',
      value: data?.description
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
    title: data?.productName ?? 'Carregando...',
    modal
  };
};
