import { useRouter } from 'next/navigation';

export const useAddressFormHook = () => {
  const router = useRouter();

  const handleBack = () => router.push('/coffee-shop/create/step-1');

  const handleContinue = () => router.push('/coffee-shop/create/step-3');

  return {
    handleBack,
    handleContinue
  };
};
