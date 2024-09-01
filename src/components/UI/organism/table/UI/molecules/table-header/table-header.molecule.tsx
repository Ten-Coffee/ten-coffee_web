import './table-header.style.scss';
import { columns } from '@/components/UI/organism/table/mock-data/columns.mock-data';
import { HeaderCellAtom } from '@/components/UI/organism/table/UI/atoms/header-cell/header-cell.atom';

export const TableHeaderMolecule = () => {
  return (
    <thead className={'table-header'}>
      {columns.map((column, index) => (
        <HeaderCellAtom value={column} key={index} />
      ))}
    </thead>
  );
};
