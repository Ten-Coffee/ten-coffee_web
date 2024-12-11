'use client';

import { useMenuItemStore } from '@/components/templates/(privated)/menuItem/store/item-menu.store';
import { getItemCategoryLabel } from '@/enums/item-category.enum';
import { CreateMenuItemInterface } from '@/interfaces/menu-item/create-menu-item.interface';
import { useToastContext } from '@/providers/toast.provider';
import { IngredientsTypeService } from '@/services/ingredients-type/ingredients-type.service';
import { MenuItemService } from '@/services/menu-item/menu-item.service';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

export const useItemMenuDataRevisionFormHook = () => {
  const router = useRouter();
  const { toast } = useToastContext();
  const { formData, resetItem } = useMenuItemStore();
  const [ingredientsData, setIngredientsData] = useState<
    { label: string; value: string }[]
  >([]);

  const mutation = useMutation({
    mutationFn: (data: CreateMenuItemInterface) => MenuItemService.create(data),
    onSuccess: () => {
      toast({
        title: 'Item adicionado ao cardápio com sucesso!',
        status: 'success'
      });
      resetItem();
      router.push('/menu-items');
    },
    onError: (error) => {
      toast({
        title: 'Erro ao adicionar item no cardápio!',
        description: error,
        status: 'error'
      });
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

  const fetchIngredientDetails = async (ingredientTypeId: string) => {
    try {
      const ingredientType =
        await IngredientsTypeService.findById(ingredientTypeId);
      return ingredientType.productName;
    } catch (error) {
      console.error('Erro ao buscar detalhes do ingrediente:', error);
      return 'Desconhecido';
    }
  };

  useEffect(() => {
    const fetchIngredientsData = async () => {
      const data = await Promise.all(
        formData.ingredients.map(async (ingredient, index) => {
          const productName = await fetchIngredientDetails(
            ingredient.ingredientTypeId
          );
          return {
            label: `${index + 1}º`,
            value: `${productName} (${ingredient.quantity})`
          };
        })
      );

      setIngredientsData(data);
    };

    fetchIngredientsData();
  }, [formData.ingredients]);

  const handleBack = () => {
    router.back();
  };

  return {
    menuItemData,
    ingredientsData, // Agora é um array síncrono
    handleBack,
    handleCreate,
    mutation
  };
};
