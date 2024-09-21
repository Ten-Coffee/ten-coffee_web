'use client';

import { useRouter } from 'next/navigation';

export const useCoffeeShopFormHook = () => {
  const router = useRouter();

  const navigateTo = (path: string) => {
    router.push(path);
  };

  const handleCancel = () => {
    navigateTo('/');
  };

  const handleContinue = () => {
    navigateTo('/coffee-shop/create/step-2');
  };

  return {
    handleCancel,
    handleContinue
  };
};
