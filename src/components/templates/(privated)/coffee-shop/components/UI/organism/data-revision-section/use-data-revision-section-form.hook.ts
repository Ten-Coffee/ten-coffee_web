'use client';

import { useFormStore } from '@/components/templates/(privated)/coffee-shop/create/store/coffee-shop-store';
import { CoffeeShopService } from '@/services/coffee-shop/coffee-shop.service';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

export const useDataRevisionFormHook = () => {
  const router = useRouter();
  const { formatData, formData, extractData } = useFormStore();
  const { coffeeShop, representative, address } = formData;
  const requestData = formatData();

  const mutation = useMutation({
    mutationFn: () => CoffeeShopService.create(requestData),
    onSuccess: () => {
      toast.success('Cafeteria cadastrada com sucesso!');
      router.push('/coffee-shops');
    },
    onError: (error) =>
      toast.error('Erro ao cadastrar cafeteria: ' + error.message)
  });

  const handleBack = () => {
    router.back();
  };

  const handleCreate = () => {
    mutation.mutate();
  };

  return {
    coffeeShop: extractData(coffeeShop),
    address: extractData(address),
    representative: extractData(representative),
    handleBack,
    handleCreate,
    mutation
  };
};
