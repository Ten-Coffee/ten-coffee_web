import './table.style.scss';
import { ColumnInterface } from '@/components/UI/organism/table/interfaces/column.interface';
import { RowActionsInterface } from '@/components/UI/organism/table/interfaces/row-actions.interface';
import { TableBodyMolecule } from '@/components/UI/organism/table/UI/molecules/table-body/table-body.molecule';
import { TableHeaderMolecule } from '@/components/UI/organism/table/UI/molecules/table-header/table-header.molecule';
import { TablePageButtonsMolecule } from '@/components/UI/organism/table/UI/molecules/table-page-buttons/table-page-buttons.molecule';

interface TableOrganismProps<T> {
  data: T[] | undefined;
  columns: ColumnInterface<T>[];
  rowActions?: RowActionsInterface<T>[];
  totalPages?: number;
  number: number;
}

export const TableOrganism = <T,>({
  columns,
  data,
  rowActions,
  totalPages = 1,
  number
}: TableOrganismProps<T>) => {
  return (
    <div className={'table-wrapper'}>
      <table className={'table-wrapper__table'}>
        <TableHeaderMolecule columns={columns} rowActions={rowActions} />
        <TableBodyMolecule
          data={data}
          columns={columns}
          rowActions={rowActions}
        />
      </table>
      <TablePageButtonsMolecule totalPages={totalPages} currentPage={number} />
    </div>
  );
};
