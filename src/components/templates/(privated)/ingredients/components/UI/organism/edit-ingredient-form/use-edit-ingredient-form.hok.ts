import { ingredientsSchema } from '@/components/templates/(privated)/ingredients/schemas/ingredients.schema';
import { mapMeasurement, measurementNames } from '@/enums/measurement.enum';
import { EditIngredientsInterface } from '@/interfaces/ingredients-type/edit-ingredients.interface';
import { useToastContext } from '@/providers/toast.provider';
import { IngredientsTypeService } from '@/services/ingredients-type/ingredients-type.service';
import { PathParamsType } from '@/types/path-params.type';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useParams, useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';

export const useEditIngredientFormHok = () => {
  const { id } = useParams<PathParamsType>();
  const { toast } = useToastContext();
  const router = useRouter();

  const { data } = useQuery({
    queryKey: ['read-ingredient', id],
    queryFn: () => IngredientsTypeService.findById(id),
    enabled: !!id
  });

  const mutation = useMutation({
    mutationFn: (data: EditIngredientsInterface) =>
      IngredientsTypeService.updateById(id, data),
    onSuccess: () => {
      toast({
        title: 'Ingrediente editado com sucesso!',
        status: 'success'
      });
      router.push('/ingredients');
    },
    onError: (error) => {
      toast({
        title: 'Erro ao editar ingrediente!',
        description: error,
        status: 'error'
      });
    }
  });

  const form = useForm<z.infer<typeof ingredientsSchema>>({
    resolver: zodResolver(ingredientsSchema),
    mode: 'all',
    reValidateMode: 'onChange',
    criteriaMode: 'all'
  });

  const submitForm: SubmitHandler<z.infer<typeof ingredientsSchema>> = async (
    data
  ) => {
    const payload: EditIngredientsInterface = {
      category: data.category,
      description: data.description,
      measurement: mapMeasurement[data.measurement],
      productName: data.productName
    };

    await mutation.mutateAsync(payload);
  };

  useEffect(() => {
    if (data) {
      form.reset({
        ...data,
        measurement: measurementNames[data.measurement]
      });
    }
  }, [data, form]);

  return {
    handleBack: () => router.back(),
    form,
    submitForm
  };
};
