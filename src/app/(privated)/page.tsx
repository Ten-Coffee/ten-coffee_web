'use client';
import { useEffect, useState } from 'react';
import './page.style.scss';

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return <></>;
}
