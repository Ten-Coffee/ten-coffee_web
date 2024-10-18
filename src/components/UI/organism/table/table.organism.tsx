import './table.style.scss';
import { ColumnInterface } from '@/components/UI/organism/table/interfaces/column.interface';
import { RowActionsInterface } from '@/components/UI/organism/table/interfaces/row-actions.interface';
import { TableBodyMolecule } from '@/components/UI/organism/table/UI/molecules/table-body/table-body.molecule';
import { TableHeaderMolecule } from '@/components/UI/organism/table/UI/molecules/table-header/table-header.molecule';

interface TableOrganismProps<T> {
  data: T[];
  columns: ColumnInterface<T>[];
  rowActions?: RowActionsInterface<T>[];
}

export const TableOrganism = <T,>({
  columns,
  data,
  rowActions
}: TableOrganismProps<T>) => {
  return (
    <table className={'table'}>
      <TableHeaderMolecule columns={columns} rowActions={rowActions} />
      <TableBodyMolecule
        data={data}
        columns={columns}
        rowActions={rowActions}
      />
    </table>
  );
};
