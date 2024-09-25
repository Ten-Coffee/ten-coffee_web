import './table.style.scss';
import { TableBodyMolecule } from '@/components/UI/organism/table/UI/molecules/table-body/table-body.molecule';
import { TableHeaderMolecule } from '@/components/UI/organism/table/UI/molecules/table-header/table-header.molecule';

interface Column<T> {
  Header: string;
  accessor: keyof T;
}

interface TableOrganismProps<T> {
  columns: Column<T>[];
  data: T[];
}

export const TableOrganism = <T,>({ columns, data }: TableOrganismProps<T>) => {
  if (!columns || !data) {
    return <div>Dados não disponíveis</div>;
  }

  return (
    <table className={'table'}>
      <TableHeaderMolecule columns={columns.map((column) => column.Header)} />
      <TableBodyMolecule
        data={data}
        columns={columns.map((column) => ({ key: column.accessor }))}
      />
    </table>
  );
};
