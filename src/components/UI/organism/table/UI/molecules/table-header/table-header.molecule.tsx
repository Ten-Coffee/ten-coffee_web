import './table-header.style.scss';
import { HeaderCellAtom } from '../../atoms/header-cell/header-cell.atom';

interface TableHeaderMoleculeProps {
  columns: string[];
}

export const TableHeaderMolecule = ({ columns }: TableHeaderMoleculeProps) => {
  return (
    <thead className={'table-header'}>
      <tr>
        {columns.map((column, index) => (
          <HeaderCellAtom key={index.toString()} value={column} />
        ))}
      </tr>
    </thead>
  );
};
