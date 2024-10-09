'use client';

import { useRouter } from 'next/navigation';

export const useUserFormHook = () => {
  const router = useRouter();

  const navigateTo = (path: string) => {
    router.push(path);
  };

  const handleCancel = () => {
    navigateTo('/users');
  };

  const handleContinue = () => {
    navigateTo('');
  };

  return {
    handleCancel,
    handleContinue
  };
};
