import { useRouter } from 'next/navigation';

export const useMenuItemHook = () => {
  const router = useRouter();

  return {
    onAdd: () => router.push('/menu-items/create/step-1')
  };
};
