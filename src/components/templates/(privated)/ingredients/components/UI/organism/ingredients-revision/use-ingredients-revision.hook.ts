import { useIngredientsStore } from '@/components/templates/(privated)/ingredients/store/ingredients.store';
import { mapMeasurement } from '@/enums/measurement.enum';
import { CreateIngredientsTypeInterface } from '@/interfaces/ingredients-type/create-ingredients-type.interface';
import { IngredientsTypeService } from '@/services/ingredients-type/ingredients-type.service';
import { extractData } from '@/utils/extract-data.utils';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

export const useIngredientsRevisionHook = () => {
  const router = useRouter();
  const { form } = useIngredientsStore();

  const transformToCreateIngredientsInterface: CreateIngredientsTypeInterface =
    {
      coffeeShopId: 1,
      description: form.description,
      productName: form.productName,
      category: form.category,
      measurement: mapMeasurement[form.measurement]
    };

  const mutation = useMutation({
    mutationFn: () =>
      IngredientsTypeService.create(transformToCreateIngredientsInterface),
    onSuccess: () => router.push('/ingredients')
  });

  return {
    handleBack: () => router.back(),
    ingredient: extractData(form),
    mutation
  };
};
