import { EditMenuItemInterface } from '@/interfaces/menu-item/edit-item-menu-interface';
import { MenuItemService } from '@/services/menu-item/menu-item.service';
import { useQuery, useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { useParams } from 'next/navigation';
import { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

export const useEditMenuItemFormHook = () => {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();

  const { data } = useQuery({
    queryKey: ['menu-item', id],
    queryFn: () => MenuItemService.findById(id),
    enabled: !!id
  });

  const form = useForm<EditMenuItemInterface>({
    defaultValues: {
      name: '',
      description: '',
      price: 0,
      category: 'FOOD',
      image: ''
    },
    mode: 'all'
  });

  const convertFileToBase64 = async (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result as string);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  };

  const mutation = useMutation({
    mutationFn: async (formData: EditMenuItemInterface) => {
      return MenuItemService.editById(id, formData);
    },
    onSuccess: () => router.push(`/menu-items/edit/step-2/${id}`)
  });

  const submitForm: SubmitHandler<EditMenuItemInterface> = async (formData) => {
    let base64Image = formData.image;

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    if (formData.image instanceof FileList && formData.image[0]) {
      try {
        base64Image = await convertFileToBase64(formData.image[0]);
      } catch (error) {
        console.error('Erro ao converter a imagem para Base64:', error);
        return;
      }
    }

    await mutation.mutateAsync({ ...formData, image: base64Image });
  };

  useEffect(() => {
    if (data) {
      form.reset({
        name: data.name,
        description: data.description,
        price: data.price,
        category: data.category,
        image: ''
      });
    }
  }, [data, form]);

  return {
    handleCancel: () => router.push('/menu-items'),
    submitForm,
    form
  };
};
