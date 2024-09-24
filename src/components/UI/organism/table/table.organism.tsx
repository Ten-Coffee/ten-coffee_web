import './table.style.scss';

import { columns } from '@/components/UI/organism/table/mock-data/columns.mock-data';
import { TableHeaderMolecule } from './UI/molecules/table-header/table-header.molecule';
import { TableBodyMolecule } from './UI/molecules/table-body/table-body.molecule';
import { empresas } from './mock-data/table.mock-data.';

export const TableOrganism = () => {
  return (
    <table className={'table'}>
      <TableHeaderMolecule columns={columns} />
      <TableBodyMolecule data={empresas} />
    </table>
  );
};
