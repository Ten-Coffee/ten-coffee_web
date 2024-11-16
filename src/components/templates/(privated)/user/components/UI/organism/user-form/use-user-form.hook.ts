'use client';

import { userSchema } from '@/components/templates/(privated)/user/schemas/user.schema';
import { useUserFormStore } from '@/components/templates/(privated)/user/store/users.store';
import { useSearchDebounceHook } from '@/hooks/use-search-debounce.hook';
import { CoffeeShopService } from '@/services/coffee-shop/coffee-shop.service';
import { zodResolver } from '@hookform/resolvers/zod';
import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';

export const useUserFormHook = () => {
  const [search, setSearch] = useState('');
  const debouncedSearch = useSearchDebounceHook({ value: search, delay: 500 });
  const { update, data: formData } = useUserFormStore();
  const router = useRouter();

  const handleCancel = () => router.push('/users');

  const { data } = useQuery({
    queryKey: ['register-user', debouncedSearch],
    queryFn: () => CoffeeShopService.findSummaries(search)
  });

  const form = useForm<z.infer<typeof userSchema>>({
    resolver: zodResolver(userSchema),
    mode: 'all',
    reValidateMode: 'onChange',
    criteriaMode: 'all',
    defaultValues: formData.user
  });

  const handleForm: SubmitHandler<z.infer<typeof userSchema>> = (data) => {
    update({ user: data });
    router.push('/users/create/step-2');
  };

  return {
    handleCancel,
    form,
    data,
    setSearch,
    search,
    handleForm
  };
};
