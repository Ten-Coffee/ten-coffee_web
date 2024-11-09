'use client';

import './page-number-button.styles.scss';
import { usePageSearchHook } from '@/hooks/use-page-search.hook';

interface PageNumberButtonAtomProps {
  number: number;
  isSelected?: boolean;
}

export const PageNumberButtonAtom = ({
  number,
  isSelected
}: PageNumberButtonAtomProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, setPages] = usePageSearchHook();

  const className = isSelected
    ? 'page-number-button__selected'
    : 'page-number-button';

  const handlePage = () => setPages({ page: number - 1 });

  return (
    <button onClick={handlePage} className={className}>
      {number}
    </button>
  );
};
