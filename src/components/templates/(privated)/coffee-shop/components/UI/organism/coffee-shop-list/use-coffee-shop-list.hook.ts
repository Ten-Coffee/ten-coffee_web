'use client';

import { useRouter } from 'next/navigation';

export const useCoffeeShopListHook = () => {
  const router = useRouter();

  const navigateTo = (path: string) => {
    router.push(path);
  };

  const handleAdicionar = () => {
    navigateTo('/coffee-shop/create/step-1');
  };

  return {
    handleAdicionar
  };
};
