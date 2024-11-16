'use client';

import { icons } from '@/icons/icons';
import { useState } from 'react';

interface UseSelectInputHookProps {
  onChange?: (value: string | number) => void;
}

export const useSelectInputHook = ({ onChange }: UseSelectInputHookProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSelect = () => setIsOpen(!isOpen);

  const handleSelect = (value: string | number) => {
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
