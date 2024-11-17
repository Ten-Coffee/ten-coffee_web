'use client';

import { addressSchema } from '@/components/templates/(privated)/coffee-shop/create/schemas/address.schema';
import { useFormStore } from '@/components/templates/(privated)/coffee-shop/create/store/coffee-shop-store';
import { ViaCepService } from '@/services/via-cep/via-cep.service';
import { removeZipCodeMask } from '@/utils/remove-mask.utils';
import { zodResolver } from '@hookform/resolvers/zod';
import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';

export const useAddressFormHook = () => {
  const { updateFormData, formData } = useFormStore();
  const router = useRouter();

  const {
    handleSubmit,
    register,
    formState: { errors },
    getValues,
    setValue,
    control
  } = useForm<z.infer<typeof addressSchema>>({
    resolver: zodResolver(addressSchema),
    mode: 'all',
    reValidateMode: 'onChange',
    criteriaMode: 'all',
    defaultValues: formData.address
  });

  const handleForm: SubmitHandler<z.infer<typeof addressSchema>> = (data) => {
    updateFormData({ address: data });
    router.push('/coffee-shops/create/step-3');
  };

  const cepValue = getValues('zipCode');

  const { data } = useQuery({
    queryKey: ['find-cep'],
    queryFn: () => ViaCepService.find(cepValue),
    enabled: removeZipCodeMask(cepValue).length === 8
  });

  useEffect(() => {
    if (!data) return;

    const { cep, logradouro, bairro, localidade, uf } = data;

    setValue('zipCode', cep);
    setValue('street', logradouro);
    setValue('neighborhood', bairro);
    setValue('city', localidade);
    setValue('state', uf);
  }, [data, setValue]);

  console.log(getValues('neighborhood').length);

  const handleBack = () => router.back();

  return { handleSubmit, register, errors, handleForm, handleBack, control };
};
