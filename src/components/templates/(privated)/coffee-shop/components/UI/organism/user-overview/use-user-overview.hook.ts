import { DataItem } from '@/components/templates/(privated)/coffee-shop/components/UI/organism/data-revision/interfaces/data-item.interface';
import { getPermissionLabel } from '@/enums/user-permission.enum';
import { UsersService } from '@/services/users/users.service';
import { PathParamsType } from '@/types/path-params.type';
import { cpfMask, phoneMask } from '@/utils/mask.utils';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'next/navigation';

export const useUserOverviewHook = () => {
  const { id } = useParams<PathParamsType>();

  const { data, isLoading } = useQuery({
    queryKey: ['user-overview'],
    queryFn: () => UsersService.findById(id),
    enabled: !!id
  });

  const userDataItem: DataItem[] = [
    {
      label: 'Nome',
      value: data?.name || '-'
    },
    {
      label: 'Permissão',
      value: getPermissionLabel[data?.permission || 'REPRESENTATIVE']
    },
    {
      label: 'Cafeteria',
      value: data?.coffeeShopName || '-'
    },
    {
      label: 'Telefone',
      value: phoneMask(data?.phone) || '-'
    },
    {
      label: 'CPF',
      value: cpfMask(data?.cpf) || '-'
    }
  ];

  const credentialDataItem: DataItem[] = [
    {
      label: 'Login',
      value: data?.login || '-'
    },
    {
      label: 'Senha',
      value: '*********'
    }
  ];

  return {
    userData: {
      isLoading,
      data: userDataItem
    },
    credentialData: {
      isLoading,
      data: credentialDataItem
    }
  };
};
