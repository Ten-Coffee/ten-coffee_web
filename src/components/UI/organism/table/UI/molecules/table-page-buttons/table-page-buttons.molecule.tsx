import './table-page-buttons.styles.scss';

import { PageNumberButtonAtom } from '@/components/UI/organism/table/UI/atoms/page-number-button/page-number-button.atom';

interface TablePageButtonsMoleculeProps {
  totalPages: number;
  currentPage: number;
}

export const TablePageButtonsMolecule = ({
  totalPages = 1,
  currentPage
}: TablePageButtonsMoleculeProps) => {
  const totalPagesArray: number[] = Array.from(
    { length: totalPages },
    (_, i) => (i += 1)
  );

  return (
    <div className={'table-page-buttons'}>
      {totalPagesArray.map((number, index) => (
        <PageNumberButtonAtom
          isSelected={index === currentPage}
          key={number}
          number={number}
        />
      ))}
    </div>
  );
};
