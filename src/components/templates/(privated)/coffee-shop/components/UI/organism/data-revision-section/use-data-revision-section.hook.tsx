'use client';

import { useRouter } from 'next/navigation';

export const useDataRevisionSectionHook = () => {
  const router = useRouter();

  const navigateTo = (path: string) => {
    router.push(path);
  };

  const handleBack = () => {
    navigateTo('/coffee-shop/create/step-3');
  };

  const handleCreate = () => {
    navigateTo('/');
  };

  return {
    handleBack,
    handleCreate
  };
};
