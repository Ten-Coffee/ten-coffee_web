import { useRouter } from 'next/navigation';

export const useInventoryHook = () => {
  const router = useRouter();

  return {
    onAdd: () => router.push('/inventory/create/step-1')
  };
};
