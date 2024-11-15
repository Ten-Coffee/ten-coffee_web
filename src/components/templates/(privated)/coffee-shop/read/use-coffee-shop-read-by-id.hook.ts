import { useRouter } from 'next/navigation';

export const useCoffeeShopReadByIdHook = () => {
  const router = useRouter();

  const goBackPage = () => router.push('/coffee-shops');

  return {
    goBackPage
  };
};
