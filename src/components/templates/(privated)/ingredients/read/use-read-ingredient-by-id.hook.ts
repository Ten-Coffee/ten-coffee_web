import { IngredientsInterface } from '@/interfaces/ingredients/ingredients.interface';
import { PathParamsType } from '@/types/path-params.type';
import { ReadByIdType } from '@/types/read-by-id.type';
import { useParams, useRouter } from 'next/navigation';

export const useReadIngredientByIdHook = () => {
  const { id } = useParams<PathParamsType>();

  const router = useRouter();

  const ingredient: ReadByIdType[] = [
    {
      label: 'Nome',
      value: 'Carregando...'
    },
    {
      label: 'Unidade de Medida',
      value: 'Carregando...'
    },
    {
      label: 'Categoria',
      value: 'Carregando...'
    },
    {
      label: 'Descrição',
      value: 'Carregando...'
    },
    {
      label: 'Status',
      value: 'ACTIVE',
      isStatus: true
    }
  ];

  const editButton = {
    text: 'Editar',
    onClick: () => router.push(`/ingredients/edit/step-1/${id}`)
  };

  return {
    goBackPage: () => router.back(),
    ingredient: {
      dataToShow: ingredient,
      isLoading: false,
      data: [{}] as IngredientsInterface[]
    },
    editButton
  };
};
