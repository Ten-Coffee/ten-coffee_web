'use client';

import { useRouter } from 'next/navigation';

export const useRepresentativeFormHook = () => {
  const router = useRouter();

  const navigateTo = (path: string) => {
    router.push(path);
  };

  const handleBack = () => {
    navigateTo('/coffee-shop/create/step-2');
  };

  const handleContinue = () => {
    navigateTo('/coffee-shop/create/step-4');
  };

  return {
    handleBack,
    handleContinue
  };
};
