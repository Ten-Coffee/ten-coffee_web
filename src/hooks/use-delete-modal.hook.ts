import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';

interface UseDeleteModalHookConfig<T> {
  title: (item: T) => string;
  getDescription: (item: T) => string;
  mutationFn: (id: number) => Promise<void>;
  buttonText: (item: T) => string;
}

export const useDeleteModalHook = <T extends { id: number }>(
  config: UseDeleteModalHookConfig<T>,
  query: string
) => {
  const [isOpen, setIsOpen] = useState(false);
  const [description, setDescription] = useState('');
  const [selectedItem, setId] = useState<T | null>(null);

  const queryClient = useQueryClient();

  const toggle = () => setIsOpen(!isOpen);

  const onClickModal = (item: T) => {
    toggle();
    setDescription(config.getDescription(item));
    setId(item);
  };

  const mutation = useMutation({
    mutationFn: async () => {
      if (!selectedItem) {
        return Promise.reject();
      }

      return await config.mutationFn(selectedItem.id).then(() =>
        queryClient.invalidateQueries({
          queryKey: [query]
        })
      );
    }
  });

  return {
    title: config.title(selectedItem!),
    isOpen,
    toggle,
    description,
    mainButton: {
      text: config.buttonText(selectedItem!),
      action: () => {
        mutation.mutate();
        toggle();
      }
    },
    onClickModal
  };
};
