'use client';

import { icons } from '@/icons/icons';
import { ElementType, useState } from 'react';

export const usePasswordInputHook = () => {
  const [inputType, setInputType] = useState<'password' | 'text'>('password');
  const [inputIcon, setInputIcon] = useState<ElementType>(icons.Eye.Off);

  const togglePasswordInput = () => {
    if (inputType === 'password') {
      setInputType('text');
      setInputIcon(icons.Eye.On);
      return;
    }

    setInputType('password');
    setInputIcon(icons.Eye.Off);
  };

  return {
    type: inputType,
    icon: inputIcon,
    toggle: togglePasswordInput
  };
};
