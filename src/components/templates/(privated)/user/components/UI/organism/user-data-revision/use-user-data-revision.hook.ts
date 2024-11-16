import { useUserFormStore } from '@/components/templates/(privated)/user/store/users.store';
import { mapPermission } from '@/enums/user-permission.enum';
import { CreateUsersInterface } from '@/interfaces/users/create-users.interface';
import { UsersService } from '@/services/users/users.service';
import { extractData } from '@/utils/extract-data.utils';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

export const useUserDataRevisionHook = () => {
  const router = useRouter();
  const { data: formData } = useUserFormStore();

  const handleBack = () => router.back();

  const transformToCreateUsersInterface: CreateUsersInterface = {
    name: formData.user.name,
    login: formData.credentials.login,
    userPermissionEnum: mapPermission[formData.user.permission],
    password: formData.credentials.password,
    coffeeShopId: formData.user.coffeeShop.id
  };

  const mutation = useMutation({
    mutationFn: () => UsersService.create(transformToCreateUsersInterface),
    onSuccess: () => {
      toast.success('Usuário cadastrado com sucesso', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true
      });
      router.push('/users');
    },
    onError: (error) => {
      toast.error(`Erro ao cadastrar usuário: ${error.message}`, {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true
      });
    }
  });

  const createUser = () => {
    mutation.mutate();
  };

  const user = {
    userName: formData.user.name,
    coffeeShop: formData.user.coffeeShop.value,
    permission: formData.user.permission
  };

  const credentials = {
    login: formData.credentials.login,
    password: '**********'
  };

  return {
    handleBack,
    user: extractData(user),
    credentials: extractData(credentials),
    createUser
  };
};
