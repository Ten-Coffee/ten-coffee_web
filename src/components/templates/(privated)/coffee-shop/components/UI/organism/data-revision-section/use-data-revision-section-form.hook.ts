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
    mutationFn: async () => {
      const data = await CoffeeShopService.createCoffeeShop(requestData);

      toast.success('Cadastro realizado com sucesso!');
      return data;
    },
    onSuccess: () => {
      router.push('/coffee-shops');
    },
    onError: (error) => {
      const errorMessage =
        error instanceof Error ? error.message : 'Erro desconhecido';
      toast.error(`${errorMessage}`);
    }
  });

  const handleCreate = () => {
    mutation.mutate();
  };

  return {
    handleBack: () => router.back(),
    handleCreate,
    mutation,
    coffeeShop: extractData(coffeeShop),
    address: extractData(address),
    representative: extractData(representative)
  };
};
