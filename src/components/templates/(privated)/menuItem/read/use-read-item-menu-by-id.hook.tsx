import { useDeleteModalHook } from '@/hooks/use-delete-modal.hook';
import { MenuItemInterface } from '@/interfaces/menu-item/menu-item.interface';
import { IngredientsTypeService } from '@/services/ingredients-type/ingredients-type.service';
import { MenuItemService } from '@/services/menu-item/menu-item.service';
import { PathParamsType } from '@/types/path-params.type';
import { ReadByIdType } from '@/types/read-by-id.type';
import { getActionVerb } from '@/utils/get-action-verb.utils';
import { useQuery } from '@tanstack/react-query';
import { useParams, useRouter } from 'next/navigation';

const READ_BY_ID_QUERY = 'read-item-menu-by-id';
const INGREDIENTS_QUERY = 'fetch-ingredient-names';

export const useReadItemMenuByIdHook = () => {
  const { id } = useParams<PathParamsType>();
  const router = useRouter();

  const { data, isLoading } = useQuery({
    queryKey: [READ_BY_ID_QUERY],
    queryFn: () => MenuItemService.findById(id),
    enabled: !!id
  });

  const ingredientQuery = useQuery({
    queryKey: [INGREDIENTS_QUERY, id],
    queryFn: async () => {
      if (data?.ingredients) {
        return await Promise.all(
          data.ingredients.map(async (ingredient) => {
            const productName = await IngredientsTypeService.findById(
              ingredient.ingredientTypeId.toString()
            );
            return {
              label: productName.productName,
              value: `Quantidade: ${ingredient.quantity}`
            };
          })
        );
      }
      return [];
    },
    enabled: !!data?.ingredients
  });

  const modal = useDeleteModalHook<MenuItemInterface>(
    {
      title: (item) => `${getActionVerb(item?.status)} Ingrediente`,
      getDescription: (item) =>
        `Tem certeza que deseja ${getActionVerb(item?.status).toLowerCase()} o ingrediente "${item.name}"?`,
      mutationFn: MenuItemService.deleteById,
      buttonText: (item) => getActionVerb(item?.status)
    },
    READ_BY_ID_QUERY
  );

  const menuItemData: ReadByIdType[] = [
    {
      label: 'Nome',
      value: data?.name
    },
    {
      label: 'Descrição',
      value: data?.description
    },
    {
      label: 'Preço',
      value: data?.price
    },
    {
      label: 'Status',
      value: data?.status,
      isStatus: true
    },
    {
      label: 'Imagem',
      value: data?.image,
      isImage: true
    }
  ];

  const ingredientsItemData = ingredientQuery.data || [];
  console.log(ingredientsItemData);
  return {
    goBackPage: () => router.back(),
    menuItem: {
      data: menuItemData,
      isLoading
    },
    ingredientsItem: {
      data: ingredientsItemData,
      isLoading: ingredientQuery.isLoading
    },
    data,
    title: data?.name ?? 'Carregando...',
    modal
  };
};
