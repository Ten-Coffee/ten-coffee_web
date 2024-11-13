import { useRouter } from 'next/navigation';

export const useUserListHook = () => {
  const router = useRouter();

  const handleAdicionar = () => {
    router.push('/users/create/step-1');
  };

  return {
    handleAdicionar
  };
};
