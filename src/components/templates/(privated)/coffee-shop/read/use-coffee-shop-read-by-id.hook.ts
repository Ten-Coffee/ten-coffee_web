import { FIND_ONE_COFFEE_SHOP_KEY } from '@/components/templates/(privated)/coffee-shop/keys/find-one-coffee-shop.key';
import { useDeleteModalHook } from '@/hooks/use-delete-modal.hook';
import { useTabsHook } from '@/hooks/use-tabs.hook';
import { CoffeeShopInterface } from '@/interfaces/coffee-shop/coffee-shop.interface';
import { AddressService } from '@/services/address.service';
import { CoffeeShopService } from '@/services/coffee-shop/coffee-shop.service';
import { PathParamsType } from '@/types/path-params.type';
import { ReadByIdType } from '@/types/read-by-id.type';
import { cnpjMask, phoneMask, zipCodeMask } from '@/utils/mask.utils';
import { useQuery } from '@tanstack/react-query';
import { useParams, useRouter } from 'next/navigation';

export const useCoffeeShopReadByIdHook = () => {
  const router = useRouter();
  const { id } = useParams<PathParamsType>();
  const [stateTab] = useTabsHook();

  const getActionVerb = (status: string) =>
    status === 'ACTIVE' ? 'Inativar' : 'Ativar';

  const modal = useDeleteModalHook<CoffeeShopInterface>(
    {
      title: (item) => `${getActionVerb(item?.status)} Unidade`,
      getDescription: (item) =>
        `Tem certeza que deseja ${getActionVerb(item?.status).toLowerCase()} a unidade "${item.name}" do CNPJ "${cnpjMask(item.cnpj)}"?`,
      mutationFn: CoffeeShopService.deleteById,
      buttonText: (item) => getActionVerb(item?.status)
    },
    FIND_ONE_COFFEE_SHOP_KEY
  );

  const { data: addressData, isLoading: addressIsLoading } = useQuery({
    queryKey: ['address'],
    queryFn: () => AddressService.findById(id),
    enabled: stateTab !== 'users'
  });

  const { data: coffeeShopData, isLoading: coffeeShopIsLoading } = useQuery({
    queryKey: [FIND_ONE_COFFEE_SHOP_KEY],
    queryFn: () => CoffeeShopService.findById(id),
    enabled: stateTab !== 'users'
  });

  const address: ReadByIdType[] = [
    { label: 'CEP', value: zipCodeMask(addressData?.zipCode) },
    { label: 'Logradouro', value: addressData?.street },
    { label: 'Número', value: addressData?.number },
    { label: 'Complemento', value: addressData?.additionalInformation || '-' },
    { label: 'Bairro', value: addressData?.neighborhood },
    { label: 'Cidade', value: addressData?.city },
    { label: 'Estado', value: addressData?.state }
  ];

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
      value: cnpjMask(coffeeShopData?.cnpj)
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
    goBackPage: () => router.back(),
    modal,
    address: {
      data: address,
      isLoading: addressIsLoading
    },
    coffeeShop: {
      data: coffeeShop,
      isLoading: coffeeShopIsLoading
    },
    coffeeShopData
  };
};
