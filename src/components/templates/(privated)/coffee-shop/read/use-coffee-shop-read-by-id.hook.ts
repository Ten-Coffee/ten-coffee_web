import { ReadByIdType } from '@/components/templates/(privated)/coffee-shop/read/types/read-by-id.type';
import { CoffeeShopService } from '@/services/coffee-shop/coffee-shop.service';
import { PathParamsType } from '@/type/path-params.type';
import { phoneMask } from '@/utils/mask.utils';
import { useQuery } from '@tanstack/react-query';
import { useParams, useRouter } from 'next/navigation';

export const useCoffeeShopReadByIdHook = () => {
  const { id } = useParams<PathParamsType>();

  const { data: coffeeShopData, isLoading: coffeeShopIsLoading } = useQuery({
    queryKey: ['coffeeShop'],
    queryFn: () => CoffeeShopService.findById(id)
  });

  const router = useRouter();

  const goBackPage = () => router.push('/coffee-shops');

  const coffeeShop: ReadByIdType[] = [
    {
      label: 'Razão Social',
      value: coffeeShopData?.name
    },
    {
      label: 'Nome Fantasia',
      value: coffeeShopData?.nameFantasy
    },
    {
      label: 'CNPJ',
      value: coffeeShopData?.cnpj
    },
    {
      label: 'E-mail',
      value: coffeeShopData?.email
    },
    {
      label: 'Telefone',
      value: phoneMask(coffeeShopData?.phoneNumber)
    },
    {
      label: 'Período de Contrato',
      value: `${coffeeShopData?.contractStart} - ${coffeeShopData?.contractEnd}`
    },
    {
      label: 'Status',
      value: coffeeShopData?.status,
      isStatus: true
    }
  ];

  return {
    goBackPage,
    coffeeShop: {
      data: coffeeShop,
      isLoading: coffeeShopIsLoading
    }
  };
};
