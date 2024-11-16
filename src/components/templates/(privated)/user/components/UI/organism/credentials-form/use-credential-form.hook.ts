import { credentialsSchema } from '@/components/templates/(privated)/user/schemas/credentials.schema';
import { useUserFormStore } from '@/components/templates/(privated)/user/store/users.store';
import { generateSlug } from '@/utils/generate-login.util';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useCallback, useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';

export const useCredentialFormHook = () => {
  const router = useRouter();
  const { update, data: formData } = useUserFormStore();

  const handleBack = () => router.push('/users/create/step-1');

  const form = useForm<z.infer<typeof credentialsSchema>>({
    resolver: zodResolver(credentialsSchema),
    mode: 'all',
    reValidateMode: 'onChange',
    criteriaMode: 'all',
    defaultValues: formData.credentials
  });

  const handleForm: SubmitHandler<z.infer<typeof credentialsSchema>> = (
    data
  ) => {
    update({ credentials: data });
    router.push('/users/create/step-3');
  };

  const userName = formData.user.name;
  const coffeeShopName = formData.user.coffeeShop.value;

  const generateUserLogin = useCallback(() => {
    const user = generateSlug(userName);
    const coffeeShop = generateSlug(coffeeShopName);

    if (user.length === 0 || coffeeShop.length === 0) {
      return;
    }

    const login = `${user}@${coffeeShop}.com`;

    form.setValue('login', login);
  }, [coffeeShopName, form, userName]);

  useEffect(() => {
    generateUserLogin();
  }, [generateUserLogin]);

  return {
    handleBack,
    form,
    handleForm
  };
};
