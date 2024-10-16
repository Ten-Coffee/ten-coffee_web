'use client';

import { useRouter } from 'next/navigation';

export const useUserFormHook = () => {
  const router = useRouter();

  const handleCancel = () => router.push('/users');

  const handleContinue = () => router.push('/users/create/step-2');

  return {
    handleCancel,
    handleContinue
  };
};
