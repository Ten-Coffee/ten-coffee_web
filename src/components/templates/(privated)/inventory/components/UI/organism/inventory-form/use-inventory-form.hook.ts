import { inventorySchema } from '@/components/templates/(privated)/inventory/schemas/inventory.schema';
import { useInventoryStore } from '@/components/templates/(privated)/inventory/store/inventory.store';
import { useSearchDebounceHook } from '@/hooks/use-search-debounce.hook';
import { IngredientsTypeService } from '@/services/ingredients-type/ingredients-type.service';
import { zodResolver } from '@hookform/resolvers/zod';
import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';

export const useInventoryFormHook = () => {
  const [search, setSearch] = useState('');
  const debouncedSearch = useSearchDebounceHook({ value: search, delay: 500 });
  const router = useRouter();
  const { formData, update } = useInventoryStore();

  const { data } = useQuery({
    queryKey: ['ingredients-type-type-type-summary', debouncedSearch],
    queryFn: () => IngredientsTypeService.findSummaries(search)
  });

  const form = useForm<z.infer<typeof inventorySchema>>({
    resolver: zodResolver(inventorySchema),
    mode: 'all',
    reValidateMode: 'onChange',
    criteriaMode: 'all',
    defaultValues: formData
  });

  const handleForm: SubmitHandler<z.infer<typeof inventorySchema>> = (data) => {
    update(data);
    router.push('/inventory/create/step-2');
  };

  return {
    form,
    handleCancel: () => router.back(),
    handleForm,
    setSearch,
    search,
    data
  };
};
