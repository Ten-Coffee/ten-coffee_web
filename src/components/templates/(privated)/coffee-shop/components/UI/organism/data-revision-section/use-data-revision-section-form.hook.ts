import { useFormStore } from '@/components/templates/(privated)/coffee-shop/create/store/coffee-shop-store';
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
      try {
        const response = await fetch('http://localhost:8080/coffeeShops', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(requestData)
        });

        if (!response.ok) {
          const errorMessage = await response.text();
          throw new Error(errorMessage);
        }

        const data = response.status !== 204 ? await response.json() : null;

        toast.success('Cadastro realizado com sucesso!');
        return data;
      } catch (error) {
        const errorMessage =
          error instanceof Error ? error.message : 'Erro desconhecido';
        toast.error(`${errorMessage}`);
        throw error;
      }
    }
  });

  const handleCreate = async () => {
    try {
      await mutation.mutateAsync();
      setTimeout(() => {
        router.push('/coffee-shops');
      }, 3500);
    } catch (error) {
      console.error('Erro ao criar coffee shop:', error);
    }
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
