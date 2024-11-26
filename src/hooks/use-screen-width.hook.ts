'use client';

import { useEffect, useState } from 'react';

const defaultValue = typeof window !== 'undefined' ? window.innerWidth : 0;

export const useScreenWidthHook = () => {
  const [screenWidth, setScreenWidth] = useState<number>(defaultValue);

  const handleWindowResize = () => {
    setScreenWidth(window?.innerWidth);
  };

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    window?.addEventListener('resize', handleWindowResize);

    return () => {
      window?.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  return {
    isDesktop: screenWidth >= 1024
  };
};
