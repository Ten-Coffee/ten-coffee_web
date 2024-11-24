import { getPermissionLabel } from '@/enums/user-permission.enum';
import { useDeleteModalHook } from '@/hooks/use-delete-modal.hook';
import { UsersInterface } from '@/interfaces/users/users.interface';
import { UsersService } from '@/services/users/users.service';
import { PathParamsType } from '@/types/path-params.type';
import { ReadByIdType } from '@/types/read-by-id.type';
import { getActionVerb } from '@/utils/get-action-verb.utils';
import { useQuery } from '@tanstack/react-query';
import { useParams, useRouter } from 'next/navigation';

const READ_BY_ID_QUERY = 'read-user-by-id';

export const useReadUserByIdHook = () => {
  const { id } = useParams<PathParamsType>();
  const router = useRouter();

  const { data, isLoading } = useQuery({
    queryKey: [READ_BY_ID_QUERY],
    queryFn: () => UsersService.findById(id),
    enabled: !!id
  });

  const modal = useDeleteModalHook<UsersInterface>(
    {
      title: (item) => `${getActionVerb(item?.status)} Usuário`,
      getDescription: (item) =>
        `Tem certeza que deseja ${getActionVerb(item?.status).toLowerCase()} o usuário "${item.name}"?`,
      mutationFn: UsersService.deleteById,
      buttonText: (item) => getActionVerb(item?.status)
    },
    READ_BY_ID_QUERY
  );

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
      value: data?.phone || '-'
    },
    {
      label: 'CPF',
      value: data?.cpf || '-'
    },
    {
      label: 'Status',
      value: data?.status,
      isStatus: true
    }
  ];

  return {
    data: userData,
    isLoading,
    modal,
    userData: data,
    goBackPage: () => router.back()
  };
};
