import { useRouter } from 'next/navigation';

export const useAddressForm = () => {
  const router = useRouter();

  const navigateTo = (path: string) => {
    router.push(path);
  };

  return { navigateTo };
};
