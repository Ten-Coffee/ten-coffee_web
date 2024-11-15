import { getPermissionLabel } from '@/enums/user-permission.enum';
import { UsersService } from '@/services/users/users.service';
import { PathParamsType } from '@/types/path-params.type';
import { ReadByIdType } from '@/types/read-by-id.type';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'next/navigation';

export const useReadUserByIdHook = () => {
  const { id } = useParams<PathParamsType>();

  const { data, isLoading } = useQuery({
    queryKey: ['read-user-by-id'],
    queryFn: () => UsersService.findById(id),
    enabled: !!id
  });

  const userData: ReadByIdType[] = [
    {
      label: 'Nome',
      value: data?.name
    },
    {
      label: 'Permissão',
      value: getPermissionLabel[data?.permission || 'REPRESENTATIVE']
    },
    {
      label: 'Unidade',
      value: data?.coffeeShopName
    },
    {
      label: 'Login',
      value: data?.login
    },
    {
      label: 'Telefone',
      value: data?.phone
    },
    {
      label: 'CPF',
      value: data?.cpf
    }
  ];

  return {
    data: userData,
    isLoading
  };
};
