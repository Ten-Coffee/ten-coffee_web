import { FIND_ALL_TABLES_KEY } from '@/components/templates/(privated)/tables/keys/all-tables.key';
import { tableSchema } from '@/components/templates/(privated)/tables/schemas/table.schema';
import { TableInterface } from '@/interfaces/tables/table.interface';
import { useToastContext } from '@/providers/toast.provider';
import { TablesService } from '@/services/tables/tables.service';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';

export const UseAddTablesModalHook = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { toast } = useToastContext();
  const toggle = () => setIsOpen(!isOpen);

  const form = useForm<z.infer<typeof tableSchema>>({
    resolver: zodResolver(tableSchema),
    mode: 'all',
    reValidateMode: 'onChange',
    criteriaMode: 'all'
  });

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (data: Omit<TableInterface, 'coffeeShopId'>) =>
      TablesService.create({
        coffeeShopId: '2',
        tablesNumber: data.tablesNumber,
        counter: data.counter
      }),
    onSuccess: () =>
      toast({
        title: 'Mesa adicionada com sucesso!',
        status: 'success'
      }),
    onError: (error) =>
      toast({
        title: 'Erro ao adicionar mesa!',
        description: error,
        status: 'error'
      })
  });

  const submitForm: SubmitHandler<z.infer<typeof tableSchema>> = async (
    data
  ) => {
    await mutation
      .mutateAsync(data)
      .then(() => toggle())
      .then(() =>
        queryClient.invalidateQueries({
          queryKey: [FIND_ALL_TABLES_KEY]
        })
      );
  };

  return {
    modal: {
      title: 'Adicionar mesas',
      isOpen,
      toggle,
      description: '',
      mainButton: {
        text: 'Adicionar',
        action: () => submitForm(form.getValues())
      }
    },
    form
  };
};
