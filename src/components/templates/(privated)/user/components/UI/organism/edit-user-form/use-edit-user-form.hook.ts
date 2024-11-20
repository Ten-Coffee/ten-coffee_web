import { editUserSchema } from '@/components/templates/(privated)/user/schemas/edit-user.schema';
import {
  getPermissionLabel,
  mapPermission
} from '@/enums/user-permission.enum';
import { EditUserInterface } from '@/interfaces/users/edit-user.interface';
import { UsersService } from '@/services/users/users.service';
import { PathParamsType } from '@/types/path-params.type';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useParams, useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';

export const useEditUserFormHook = () => {
  const { id } = useParams<PathParamsType>();
  const router = useRouter();

  const { data } = useQuery({
    queryKey: ['read-user', id],
    queryFn: () => UsersService.findById(id),
    enabled: !!id
  });

  const form = useForm<z.infer<typeof editUserSchema>>({
    resolver: zodResolver(editUserSchema),
    mode: 'all',
    reValidateMode: 'onChange',
    criteriaMode: 'all'
  });

  const mutation = useMutation({
    mutationFn: (data: EditUserInterface) => UsersService.editById(id, data),
    onSuccess: () => router.push(`/users/edit/step-1/${id}`)
  });

  const submitForm: SubmitHandler<z.infer<typeof editUserSchema>> = async (
    data
  ) => {
    const payload: EditUserInterface = {
      ...data,
      permission: mapPermission[data.permission || 'REPRESENTANTE']
    };

    await mutation.mutateAsync(payload);
  };

  const handleCancel = () => router.push(`/users/edit/step-1/${id}`);

  useEffect(() => {
    if (data) {
      form.reset({
        ...data,
        permission: getPermissionLabel[data.permission]
      });
    }
  }, [data, form]);

  return {
    form,
    submitForm,
    handleCancel
  };
};
