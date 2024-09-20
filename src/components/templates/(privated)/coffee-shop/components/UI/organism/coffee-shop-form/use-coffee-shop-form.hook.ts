import { useRouter } from 'next/navigation';

export const useCoffeeShopForm = () => {
  const router = useRouter();

  const navigateTo = (path: string) => {
    router.push(path);
  };

  return { navigateTo };
};
