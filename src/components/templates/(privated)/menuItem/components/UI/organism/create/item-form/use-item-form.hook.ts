import {
  MenuItem,
  menuItemSchema
} from '@/components/templates/(privated)/menuItem/schemas/item-menu.schema';
import { useMenuItemStore } from '@/components/templates/(privated)/menuItem/store/item-menu.store';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';

export const useMenuItemForm = () => {
  const { formData, setItem } = useMenuItemStore();
  const router = useRouter();

  const form = useForm<MenuItem>({
    resolver: zodResolver(menuItemSchema),
    defaultValues: {
      ...formData
    }
  });

  const saveItem = (data: MenuItem) => {
    setItem(data);
    router.push('/menu-items/create/step-2');
  };

  return { form, saveItem };
};
