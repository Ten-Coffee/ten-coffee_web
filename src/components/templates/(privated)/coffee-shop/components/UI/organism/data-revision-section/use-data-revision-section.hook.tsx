import { useRouter } from 'next/navigation';

export const useDataRevisionSectionHook = () => {
  const router = useRouter();

  const handleBack = () => router.push('/coffee-shops/create/step-3');

  const handleCreate = () => router.push('/coffee-shops');

  return {
    handleBack,
    handleCreate
  };
};
