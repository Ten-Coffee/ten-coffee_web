'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      <h1>Oi</h1>

      <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
        trocar tema
      </button>
    </>
  );
}
