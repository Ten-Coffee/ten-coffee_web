import { AddressService } from '@/services/address.service';
import { PathParamsType } from '@/types/path-params.type';
import { ReadByIdType } from '@/types/read-by-id.type';
import { zipCodeMask } from '@/utils/mask.utils';
import { useQuery } from '@tanstack/react-query';
import { useParams, useRouter } from 'next/navigation';

export const useCoffeeShopReadByIdHook = () => {
  const { id } = useParams<PathParamsType>();

  const { data: addressData, isLoading: addressIsLoading } = useQuery({
    queryKey: ['coffeeShop'],
    queryFn: () => AddressService.findById(id)
  });

  const router = useRouter();

  const goBackPage = () => router.push('/coffee-shops');

  const address: ReadByIdType[] = [
    { label: 'CEP', value: zipCodeMask(addressData?.zipCode) },
    { label: 'Logradouro', value: addressData?.street },
    { label: 'Número', value: addressData?.number },
    { label: 'Complemento', value: addressData?.additionalInformation || '-' },
    { label: 'Bairro', value: addressData?.neighborhood },
    { label: 'Cidade', value: addressData?.city },
    { label: 'Estado', value: addressData?.state }
  ];

  return {
    goBackPage,
    address: {
      data: address,
      isLoading: addressIsLoading
    }
  };
};
