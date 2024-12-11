import { EditMenuItemIngredientsInterface } from '@/interfaces/menu-item/edit-menu-item-ingredients.interface';
import { SelectOptionsInterface } from '@/interfaces/select-options.interface';
import { IngredientsTypeService } from '@/services/ingredients-type/ingredients-type.service';
import { MenuItemService } from '@/services/menu-item/menu-item.service';
import { useQuery, useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { useParams } from 'next/navigation';
import { useState } from 'react';
import { SubmitHandler, useForm, useFieldArray } from 'react-hook-form';

export const useEditIngredientMenuItemFormHook = () => {
  const { id } = useParams<{ id: string }>();
  const [search, setSearch] = useState('');
  const router = useRouter();
  const { data: rawOptions = [] } = useQuery<SelectOptionsInterface[]>({
    queryKey: ['ingredients-type-summary', search],
    queryFn: () => IngredientsTypeService.findSummaries(search)
  });
  const options = rawOptions.map((item) => ({
    id: item.id,
    value: item.value
  }));

  const form = useForm<EditMenuItemIngredientsInterface>({
    defaultValues: {
      ingredients: []
    },
    mode: 'all'
  });

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: 'ingredients'
  });

  const mutation = useMutation({
    mutationFn: async (ingredient: {
      ingredientTypeId: number;
      quantity: number;
    }) => {
      await MenuItemService.editIngredientById(
        id,
        ingredient.ingredientTypeId,
        {
          ingredientTypeId: ingredient.ingredientTypeId,
          quantity: ingredient.quantity
        }
      );
    }
  });

  const handleSubmit: SubmitHandler<EditMenuItemIngredientsInterface> = async (
    formData
  ) => {
    for (const ingredient of formData.ingredients) {
      await mutation.mutateAsync(ingredient);
      console.log(ingredient);
    }
    router.push(`/menu-items`);
  };

  return {
    handleCancel: () => router.push('/menu-items'),
    handleSubmit,
    form,
    fields,
    append,
    remove,
    options,
    search,
    setSearch
  };
};
