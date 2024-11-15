'use client';

import { CoffeeShopPage } from '@/interfaces/coffee-shop/coffee-shop-page.interface';
import { CoffeeShopService } from '@/services/coffee-shop/coffee-shop.service';
import { useMutation } from '@tanstack/react-query';
import { useState } from 'react';

export const useDeleteModalHook = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [description, setDescription] = useState('');
  const [id, setId] = useState<null | number>(null);

  const toggle = () => setIsOpen(!isOpen);

  const onClickModal = (item: CoffeeShopPage) => {
    toggle();
    setDescription(
      `Tem certeza que deseja inativar a unidade "${item.name}" do CNPJ "${item.cnpj}"?`
    );
    setId(item.id);
  };

  const mutation = useMutation({
    mutationFn: () => CoffeeShopService.deleteById(id ?? 0)
  });

  return {
    title: 'Inativar unidades',
    isOpen,
    toggle,
    description,
    mainButton: {
      text: 'Inativar',
      action: () => {
        mutation.mutate();
        toggle();
      }
    },
    onClickModal
  };
};
