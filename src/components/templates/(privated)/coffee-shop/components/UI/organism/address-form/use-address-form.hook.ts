'use client';

import {
  addressSchema,
  useFormStore
} from '@/components/templates/(privated)/coffee-shop/create/store/coffee-shop-store';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';

export const useAddressFormHook = () => {
  const { updateFormData } = useFormStore();
  const router = useRouter();

  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm<z.infer<typeof addressSchema>>({
    resolver: zodResolver(addressSchema),
    mode: 'all',
    reValidateMode: 'onChange',
    criteriaMode: 'all'
  });

  const handleForm: SubmitHandler<z.infer<typeof addressSchema>> = (data) => {
    updateFormData({ address: data });
    router.push('/coffee-shop/create/step-3');
  };

  return { handleSubmit, register, errors, handleForm };
};
