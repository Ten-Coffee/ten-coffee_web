import { useMenuItemStore } from '@/components/templates/(privated)/menuItem/create/store/item-menu.store';
import { SelectOptionsInterface } from '@/interfaces/select-options.interface';
import { IngredientsService } from '@/services/ingredients/ingredient.service';
import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useFieldArray, useForm } from 'react-hook-form';

type FormValues = {
  ingredients: { ingredient: SelectOptionsInterface }[];
};

export const useItemMenuIngredientsFormHook = () => {
  const { formData, updateIngredients } = useMenuItemStore();
  const [search, setSearch] = useState('');
  const router = useRouter();
  const { data: options } = useQuery<SelectOptionsInterface[]>({
    queryKey: ['ingredients-type-summary', search],
    queryFn: () => IngredientsService.findIngredients(search)
  });

  const form = useForm<FormValues>({
    defaultValues: {
      ingredients: formData.ingredientsName.map((name) => ({
        ingredient: { id: '', value: name }
      }))
    }
  });

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: 'ingredients'
  });

  const handleFormSubmit = (data: FormValues) => {
    const ingredientNames = data.ingredients.map(
      (item) => item.ingredient.value
    );
    updateIngredients(ingredientNames);
    router.push(`/menu-items/create/step-3`);
  };

  return {
    form,
    fields,
    append,
    remove,
    options,
    search,
    setSearch,
    handleFormSubmit
  };
};
