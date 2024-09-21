'use client';

import { useRouter } from 'next/navigation';

export const useRepresentativeFormHook = () => {
  const router = useRouter();

  const handleBack = () => router.push('/coffee-shop/create/step-2');

  const handleContinue = () => router.push('/coffee-shop/create/step-4');

  return {
    handleBack,
    handleContinue
  };
};
