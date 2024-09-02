import './table.style.scss';
import { TableBodyMolecule } from '@/components/UI/organism/table/UI/molecules/table-body/table-body.molecule';
import { TableHeaderMolecule } from '@/components/UI/organism/table/UI/molecules/table-header/table-header.molecule';

export const TableOrganism = () => {
  return (
    <table className={'table'}>
      <TableHeaderMolecule />
      <TableBodyMolecule />
    </table>
  );
};
