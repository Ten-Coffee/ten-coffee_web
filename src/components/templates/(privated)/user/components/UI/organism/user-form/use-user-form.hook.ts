'use client';

import { useRouter } from 'next/navigation';

export const useUserFormHook = () => {
  const router = useRouter();

  const handleCancel = () => router.push('/users');

  const handleContinue = () => router.push('');

  return {
    handleCancel,
    handleContinue
  };
};
