'use client';

import { useMenuItemStore } from '@/components/templates/(privated)/menuItem/create/store/item-menu.store';
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

  const menuItemData = {
    name: formData.name,
    details: [
      { label: 'Nome', value: formData.name },
      { label: 'Descrição', value: formData.description || 'N/A' },
      { label: 'Preço', value: `R$${formData.price}` },
      { label: 'Tipo', value: getItemCategoryLabel[formData.category] }
    ]
  };

  const ingredientsData = formData.ingredientsName.map((ingredient, index) => ({
    label: `${index + 1}º`,
    value: ingredient
  }));

  const handleBack = () => {
    router.back();
  };

  const handleCreate = () => {
    const formDataWithFloatPrice = {
      ...formData,
      price: parseFloat(formData.price.replace(',', '.')),
      coffeeShopId: 1
    };

    console.log('FormData enviado:', formDataWithFloatPrice);

    mutation.mutate(formDataWithFloatPrice);
  };

  return {
    menuItemData,
    ingredientsData,
    handleBack,
    handleCreate,
    mutation
  };
};
