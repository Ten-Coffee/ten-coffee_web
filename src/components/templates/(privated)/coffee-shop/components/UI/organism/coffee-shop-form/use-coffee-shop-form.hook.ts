'use client';

import { useRouter } from 'next/navigation';

export const useCoffeeShopFormHook = () => {
  const router = useRouter();

  const handleCancel = () => router.push('/coffee-shops');

  const handleContinue = () => router.push('/coffee-shops/create/step-2');

  return {
    handleCancel,
    handleContinue
  };
};
