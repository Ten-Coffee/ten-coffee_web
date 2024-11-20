import { useInventoryStore } from '@/components/templates/(privated)/inventory/store/inventory.store';
import { CreateIngredientsInterface } from '@/interfaces/ingredients/create-ingredients.interface';
import { IngredientsService } from '@/services/ingredients/ingredient.service';
import { extractData } from '@/utils/extract-data.utils';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

export const useInventoryDataRevisionHook = () => {
  const router = useRouter();
  const { formData } = useInventoryStore();

  const payload: CreateIngredientsInterface = {
    amount: formData.amount,
    dueDateClosed: formData.dueDateClosed,
    dueDateOpen: formData.dueDateOpen,
    ingredientTypeId: formData.ingredientType.id,
    ingredientTypeName: formData.ingredientType.value,
    lastPurchase: formData.lastPurchase,
    name: formData.name,
    supplier: formData.supplier
  };

  const mutation = useMutation({
    mutationFn: () => IngredientsService.create(payload),
    onSuccess: () => router.push('/inventory')
  });

  const inventory = {
    productName: formData.name,
    amount: formData.amount,
    dueDateOpen: formData.dueDateOpen,
    dueDateClosed: formData.dueDateClosed,
    lastPurchase: formData.lastPurchase,
    supplier: formData.supplier,
    ingredientType: formData.ingredientType.value
  };

  return {
    handleBack: () => router.back(),
    inventory: extractData(inventory),
    createInventory: () => mutation.mutate()
  };
};
