import { coffeeShopSchema } from '@/components/templates/(privated)/coffee-shop/create/schemas/coffee-shop.schema';
import { EditCoffeeShopInterface } from '@/interfaces/coffee-shop/edit-coffee-shop.interface';
import { CoffeeShopService } from '@/services/coffee-shop/coffee-shop.service';
import { PathParamsType } from '@/types/path-params.type';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useParams, useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';

export const useEditCoffeeShopFormHook = () => {
  const { id } = useParams<PathParamsType>();

  const router = useRouter();

  const { data } = useQuery({
    queryKey: ['edit-coffee-shop', id],
    queryFn: () => CoffeeShopService.findById(id),
    enabled: !!id
  });

  const form = useForm<z.infer<typeof coffeeShopSchema>>({
    resolver: zodResolver(coffeeShopSchema),
    mode: 'all',
    reValidateMode: 'onChange',
    criteriaMode: 'all'
  });

  const mutation = useMutation({
    mutationFn: (data: EditCoffeeShopInterface) =>
      CoffeeShopService.editById(id, data),
    onSuccess: () => router.push(`/coffee-shops/edit/step-1/${id}`)
  });

  const submitForm: SubmitHandler<z.infer<typeof coffeeShopSchema>> = async (
    data
  ) => {
    const payload: EditCoffeeShopInterface = {
      ...data
    };

    await mutation.mutateAsync(payload);
  };

  const handleCancel = () => router.push(`/coffee-shops/edit/step-1/${id}`);

  useEffect(() => {
    if (data) {
      form.reset({
        ...data,
        status: data.status
      });
    }
  }, [data, form]);

  return {
    form,
    submitForm,
    handleCancel
  };
};
