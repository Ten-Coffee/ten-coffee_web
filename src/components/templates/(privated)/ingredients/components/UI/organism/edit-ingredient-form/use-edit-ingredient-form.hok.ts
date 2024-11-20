import { ingredientsSchema } from '@/components/templates/(privated)/ingredients/schemas/ingredients.schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';

export const useEditIngredientFormHok = () => {
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
    console.log(data);
  };

  return {
    handleBack: () => router.back(),
    form,
    submitForm
  };
};
