import { ingredientsSchema } from '@/components/templates/(privated)/ingredients/schemas/ingredients.schema';
import { useIngredientsStore } from '@/components/templates/(privated)/ingredients/store/ingredients.store';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';

export const useIngredientsFormHook = () => {
  const { update } = useIngredientsStore();
  const router = useRouter();

  const form = useForm<z.infer<typeof ingredientsSchema>>({
    resolver: zodResolver(ingredientsSchema),
    mode: 'all',
    reValidateMode: 'onChange',
    criteriaMode: 'all'
  });

  const submitForm: SubmitHandler<z.infer<typeof ingredientsSchema>> = (
    data
  ) => {
    update(data);
    router.push('/ingredients/create/step-2');
  };

  return {
    handleBack: () => router.back(),
    form,
    submitForm
  };
};
