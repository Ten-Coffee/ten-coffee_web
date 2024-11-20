import { inventorySchema } from '@/components/templates/(privated)/inventory/schemas/inventory.schema';
import { useSearchDebounceHook } from '@/hooks/use-search-debounce.hook';
import { CreateIngredientsInterface } from '@/interfaces/ingredients/create-ingredients.interface';
import { IngredientsTypeService } from '@/services/ingredients-type/ingredients-type.service';
import { IngredientsService } from '@/services/ingredients/ingredient.service';
import { PathParamsType } from '@/types/path-params.type';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';

export const useEditInventoryFormHook = () => {
  const { id } = useParams<PathParamsType>();
  const router = useRouter();
  const [search, setSearch] = useState('');
  const debouncedSearch = useSearchDebounceHook({ value: search, delay: 500 });

  const { data: dataIngredientsType } = useQuery({
    queryKey: ['ingredients-type-type-type-summary', debouncedSearch],
    queryFn: () => IngredientsTypeService.findSummaries(search)
  });

  const { data } = useQuery({
    queryKey: ['edit-inventory', id],
    queryFn: () => IngredientsService.findById(id),
    enabled: !!id
  });

  const form = useForm<z.infer<typeof inventorySchema>>({
    resolver: zodResolver(inventorySchema),
    mode: 'all',
    reValidateMode: 'onChange',
    criteriaMode: 'all'
  });

  const mutation = useMutation({
    mutationFn: (data: CreateIngredientsInterface) =>
      IngredientsService.editById(id, data),
    onSuccess: () => router.push('/inventory')
  });

  const submitForm: SubmitHandler<z.infer<typeof inventorySchema>> = async (
    data
  ) => {
    const payload: CreateIngredientsInterface = {
      amount: data.amount,
      dueDateClosed: data.dueDateClosed,
      dueDateOpen: data.dueDateOpen,
      ingredientTypeId: data.ingredientType.id,
      lastPurchase: data.lastPurchase,
      name: data.name,
      supplier: data.supplier,
      ingredientTypeName: data.ingredientType.value
    };

    await mutation.mutateAsync(payload);
  };

  useEffect(() => {
    if (data) {
      form.reset({
        ...data,
        ingredientType: {
          id: data.ingredientTypeId,
          value: data.ingredientTypeName
        }
      });
    }
  }, [data, form]);

  return {
    handleCancel: () => router.push('/inventory'),
    submitForm,
    form,
    dataIngredientsType,
    search,
    setSearch
  };
};
