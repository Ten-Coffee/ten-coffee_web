'use client';

import { useRouter } from 'next/navigation';

export const useAddressFormHook = () => {
  const router = useRouter();

  const navigateTo = (path: string) => {
    router.push(path);
  };

  const handleBack = () => {
    navigateTo('/coffee-shop/create/step-1');
  };

  const handleContinue = () => {
    navigateTo('/coffee-shop/create/step-3');
  };

  return {
    handleBack,
    handleContinue
  };
};
