import './table-header.style.scss';
import { HeaderCellAtom } from '../../atoms/header-cell/header-cell.atom';

import { ColumnInterface } from '@/components/UI/organism/table/interfaces/column.interface';
import { RowActionsInterface } from '@/components/UI/organism/table/interfaces/row-actions.interface';

interface TableHeaderMoleculeProps<T> {
  columns: ColumnInterface<T>[];
  rowActions?: RowActionsInterface<T>[];
}

export const TableHeaderMolecule = <T,>({
  columns,
  rowActions
}: TableHeaderMoleculeProps<T>) => {
  return (
    <thead className={'table-header'}>
      <tr>
        {columns.map(({ value }, index) => (
          <HeaderCellAtom key={index} value={value} />
        ))}
        {rowActions?.map((_, index) => (
          <HeaderCellAtom key={index} value={''} />
        ))}
      </tr>
    </thead>
  );
};
