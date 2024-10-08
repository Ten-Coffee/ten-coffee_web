'use client';

import {
  representativeSchema,
  useFormStore
} from '@/components/templates/(privated)/coffee-shop/create/store/coffee-shop-store';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';

export const useRepresentativeFormHook = () => {
  const { updateFormData } = useFormStore();
  const router = useRouter();

  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm<z.infer<typeof representativeSchema>>({
    resolver: zodResolver(representativeSchema),
    mode: 'all',
    reValidateMode: 'onChange',
    criteriaMode: 'all'
  });

  const handleForm: SubmitHandler<z.infer<typeof representativeSchema>> = (
    data
  ) => {
    updateFormData({ representative: data });
    router.push('/coffee-shop/create/step-4');
  };

  return { handleSubmit, register, errors, handleForm };
};
