import { coffeeShopSchema } from '@/components/templates/(privated)/coffee-shop/create/schemas/coffee-shop.schema';
import { useFormStore } from '@/components/templates/(privated)/coffee-shop/create/store/coffee-shop-store';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';

export const useCoffeeShopFormHook = () => {
  const { updateFormData } = useFormStore();
  const router = useRouter();

  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm<z.infer<typeof coffeeShopSchema>>({
    resolver: zodResolver(coffeeShopSchema),
    mode: 'all',
    reValidateMode: 'onChange',
    criteriaMode: 'all'
  });

  const handleForm: SubmitHandler<z.infer<typeof coffeeShopSchema>> = (
    data
  ) => {
    updateFormData({ coffeeShop: data });
    router.push('/coffee-shops/create/step-2');
  };

  const handleBack = () => {
    router.back();
  };

  return { handleSubmit, register, errors, handleForm, handleBack };
};
