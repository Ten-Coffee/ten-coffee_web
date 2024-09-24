import { HeaderCellAtom } from '../../atoms/header-cell/header-cell.atom';
import './table-header.style.scss';

interface TableHeaderMoleculeProps {
  columns: string[];
}

export const TableHeaderMolecule = ({ columns }: TableHeaderMoleculeProps) => {
  return (
    <thead className={'table-header'}>
      <tr>
        {columns.map((column, index) => (
          <HeaderCellAtom title={column} key={index.toString()} />
        ))}
      </tr>
    </thead>
  );
};
