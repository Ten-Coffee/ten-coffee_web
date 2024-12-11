'use client';

import { useMenuItemStore } from '@/components/templates/(privated)/menuItem/store/item-menu.store';
import { getItemCategoryLabel } from '@/enums/item-category.enum';
import { CreateMenuItemInterface } from '@/interfaces/menu-item/create-menu-item.interface';
import { MenuItemService } from '@/services/menu-item/menu-item.service';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

export const useItemMenuDataRevisionFormHook = () => {
  const router = useRouter();
  const { formData, resetItem } = useMenuItemStore();

  const mutation = useMutation({
    mutationFn: (data: CreateMenuItemInterface) => MenuItemService.create(data), // Aceita dados no formato correto
    onSuccess: () => {
      resetItem();
      router.push('/menu-items');
    }
  });

  const convertFileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result as string);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  };

  const handleCreate = async () => {
    let base64Image = '';

    if (formData.image && formData.image[0]) {
      try {
        base64Image = await convertFileToBase64(formData.image[0]);
      } catch (error) {
        console.error('Erro ao converter a imagem para Base64:', error);
        return;
      }
    }

    const formDataWithBase64: CreateMenuItemInterface = {
      ...formData,
      price: parseFloat(formData.price.replace(',', '.')),
      ingredients: formData.ingredients,
      coffeeShopId: 1,
      image: base64Image
    };

    console.log('FormData enviado:', formDataWithBase64);

    mutation.mutate(formDataWithBase64);
  };

  const menuItemData = {
    name: formData.name,
    details: [
      { label: 'Nome', value: formData.name },
      { label: 'Descrição', value: formData.description || 'N/A' },
      { label: 'Preço', value: `R$${formData.price}` },
      { label: 'Tipo', value: getItemCategoryLabel[formData.category] }
    ]
  };

  const ingredientsData = formData.ingredients.map((ingredient, index) => ({
    label: `${index + 1}º`,
    value: `Id: ${ingredient.ingredientTypeId} (${ingredient.quantity})`
  }));

  const handleBack = () => {
    router.back();
  };

  return {
    menuItemData,
    ingredientsData,
    handleBack,
    handleCreate,
    mutation
  };
};
