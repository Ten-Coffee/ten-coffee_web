import { useRouter } from 'next/navigation';

export const useCredentialFormHook = () => {
  const router = useRouter();

  const handleBack = () => router.push('/users/create/step-1');

  const handleContinue = () => router.push('/users/create/step-3');

  return {
    handleBack,
    handleContinue
  };
};
