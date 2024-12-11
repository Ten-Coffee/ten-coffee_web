'use client';

import { useFormStore } from '@/components/templates/(privated)/coffee-shop/create/store/coffee-shop-store';
import { useToastContext } from '@/providers/toast.provider';
import { CoffeeShopService } from '@/services/coffee-shop/coffee-shop.service';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

export const useDataRevisionFormHook = () => {
  const router = useRouter();
  const { formatData, formData, extractData } = useFormStore();
  const { coffeeShop, representative, address } = formData;
  const { toast } = useToastContext();
  const requestData = formatData();

  const mutation = useMutation({
    mutationFn: () => CoffeeShopService.create(requestData),
    onSuccess: () => {
      toast({
        title: 'Cafeteria adicionada com sucesso!',
        status: 'success'
      });
      router.push('/coffee-shops');
    },
    onError: (error) => {
      toast({
        title: 'Erro ao adicionar cafeteria!',
        description: error,
        status: 'error'
      });
    }
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
