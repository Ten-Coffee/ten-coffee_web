'use client';

import { addressSchema } from '@/components/templates/(privated)/coffee-shop/create/schemas/address.schema';
import { AddressInterface } from '@/interfaces/address/address.interface';
import { AddressService } from '@/services/address.service';
import { ViaCepService } from '@/services/via-cep/via-cep.service';
import { PathParamsType } from '@/types/path-params.type';
import { removeZipCodeMask } from '@/utils/remove-mask.utils';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useParams, useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';

export const useEditAddressFormHook = () => {
  const { id } = useParams<PathParamsType>();
  const router = useRouter();

  const { data } = useQuery({
    queryKey: ['read-address', id],
    queryFn: () => AddressService.findById(id),
    enabled: !!id
  });

  const form = useForm<z.infer<typeof addressSchema>>({
    resolver: zodResolver(addressSchema),
    mode: 'all',
    reValidateMode: 'onChange',
    criteriaMode: 'all'
  });

  const mutation = useMutation({
    mutationFn: async (data: AddressInterface) => {
      console.log('Payload sent to backend:', data);
      return AddressService.editById(id, data);
    },

    onSuccess: () => router.push(`/coffee-shops/edit/step-1/${id}`),
    onError: (error) => {
      console.error('Error in mutation:', error);
    }
  });

  const submitForm: SubmitHandler<z.infer<typeof addressSchema>> = async (
    formData
  ) => {
    const payload: AddressInterface = {
      ...formData,
      zipCode: removeZipCodeMask(formData.zipCode)
    };

    console.log('Form Data:', formData);
    console.log('Payload being sent:', payload);

    await mutation.mutateAsync(payload);
  };

  const zipCode = form.watch('zipCode');
  const viaCepQuery = useQuery({
    queryKey: ['find-cep', zipCode],
    queryFn: () => ViaCepService.find(zipCode),
    enabled: removeZipCodeMask(zipCode).length === 8
  });

  useEffect(() => {
    if (!viaCepQuery.data) return;

    const { cep, logradouro, bairro, localidade, uf } = viaCepQuery.data;

    form.setValue('zipCode', cep);
    form.setValue('street', logradouro);
    form.setValue('neighborhood', bairro);
    form.setValue('city', localidade);
    form.setValue('state', uf);
  }, [viaCepQuery.data, form]);

  useEffect(() => {
    if (data) {
      form.reset({
        ...data,
        zipCode: data.zipCode
      });
    }
  }, [data, form]);

  const handleCancel = () => router.push(`/coffee-shops/edit/step-1/${id}`);

  return {
    form,
    submitForm,
    handleCancel
  };
};
