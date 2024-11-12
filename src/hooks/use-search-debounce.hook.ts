import { useEffect, useState } from 'react';

interface useSearchDebounceHookProps {
  value: string;
  delay: number;
}

export const useSearchDebounceHook = ({
  value,
  delay
}: useSearchDebounceHookProps) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(handler);
  }, [value, delay]);

  return debouncedValue;
};
