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

      const data = response.status !== 204 && (await response.json());

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
