'use client';

import { icons } from '@/icons/icons';
import { SelectOptionsInterface } from '@/interfaces/select-options.interface';
import { useState } from 'react';

interface UseComboboxInputHookProps {
  onChange?: (value: SelectOptionsInterface) => void;
}

export const useComboboxInputHook = ({
  onChange
}: UseComboboxInputHookProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSelect = () => setIsOpen(!isOpen);

  const handleSelect = (value: SelectOptionsInterface) => {
    if (onChange) {
      onChange(value);
    }
    toggleSelect();
  };

  const icon = isOpen ? icons.Chevron.Up : icons.Chevron.Down;

  return {
    isOpen,
    toggleSelect,
    handleSelect,
    icon
  };
};
