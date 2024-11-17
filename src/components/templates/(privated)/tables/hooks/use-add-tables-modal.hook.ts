import { tableSchema } from '@/components/templates/(privated)/tables/schemas/table.schema';
import { TableInterface } from '@/interfaces/tables/table.interface';
import { TablesService } from '@/services/tables/tables.service';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';

export const UseAddTablesModalHook = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const form = useForm<z.infer<typeof tableSchema>>({
    resolver: zodResolver(tableSchema),
    mode: 'all',
    reValidateMode: 'onChange',
    criteriaMode: 'all'
  });

  const mutation = useMutation({
    mutationFn: (data: Omit<TableInterface, 'coffeeShopId'>) =>
      TablesService.create({
        coffeeShopId: '1',
        tablesNumber: data.tablesNumber,
        counter: data.counter
      })
  });

  const submitForm: SubmitHandler<z.infer<typeof tableSchema>> = async (
    data
  ) => {
    await mutation.mutateAsync(data).then(() => toggle());
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
