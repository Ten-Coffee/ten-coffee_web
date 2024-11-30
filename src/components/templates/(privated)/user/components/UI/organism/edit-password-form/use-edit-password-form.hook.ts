import { editCredentialsSchema } from '@/components/templates/(privated)/user/schemas/edit-credentials.schema';
import { UpdatePasswordInterface } from '@/interfaces/users/update-password.interface';
import { useToastContext } from '@/providers/toast.provider';
import { UsersService } from '@/services/users/users.service';
import { PathParamsType } from '@/types/path-params.type';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useParams, useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';

export const useEditPasswordFormHook = () => {
  const { id } = useParams<PathParamsType>();
  const router = useRouter();
  const { toast } = useToastContext();

  const { data } = useQuery({
    queryKey: ['read-user', id],
    queryFn: () => UsersService.findById(id),
    enabled: !!id
  });

  const mutation = useMutation({
    mutationFn: (data: UpdatePasswordInterface) =>
      UsersService.updatePassword(id, data),
    onSuccess: () => {
      toast({
        title: 'Senha alterada com sucesso',
        status: 'success'
      });
      router.push(`/users/edit/step-1/${id}`);
    },
    onError: (error) =>
      toast({
        title: 'Erro ao alterar a senha',
        description: error,
        status: 'error'
      })
  });

  const submitForm: SubmitHandler<
    z.infer<typeof editCredentialsSchema>
  > = async (data) => {
    const payload: UpdatePasswordInterface = {
      newPassword: data.password
    };

    await mutation.mutateAsync(payload);
  };

  const form = useForm<z.infer<typeof editCredentialsSchema>>({
    resolver: zodResolver(editCredentialsSchema),
    mode: 'all',
    reValidateMode: 'onChange',
    criteriaMode: 'all'
  });

  useEffect(() => {
    if (data) {
      form.reset({
        ...data
      });
    }
  }, [data, form]);

  return {
    handleCancel: () => router.back(),
    form,
    submitForm
  };
};
