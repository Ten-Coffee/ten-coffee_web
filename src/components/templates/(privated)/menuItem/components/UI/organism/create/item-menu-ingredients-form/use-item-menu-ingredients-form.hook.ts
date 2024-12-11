import { useMenuItemStore } from '@/components/templates/(privated)/menuItem/store/item-menu.store';
import { SelectOptionsInterface } from '@/interfaces/select-options.interface';
import { IngredientsTypeService } from '@/services/ingredients-type/ingredients-type.service';
import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useFieldArray, useForm } from 'react-hook-form';

type FormValues = {
  ingredients: {
    ingredient: { ingredientTypeId: string };
    quantity: number;
  }[];
};

export const useItemMenuIngredientsFormHook = () => {
  const { formData, updateIngredients } = useMenuItemStore();
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

  const form = useForm<FormValues>({
    defaultValues: {
      ingredients: formData.ingredients.map((ing) => ({
        ingredient: { ingredientTypeId: ing.ingredientTypeId },
        quantity: ing.quantity
      }))
    }
  });

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: 'ingredients'
  });

  const handleFormSubmit = (data: FormValues) => {
    const ingredients = data.ingredients.map((item) => ({
      ingredientTypeId: item.ingredient.ingredientTypeId,
      quantity: item.quantity
    }));
    updateIngredients(ingredients);
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
