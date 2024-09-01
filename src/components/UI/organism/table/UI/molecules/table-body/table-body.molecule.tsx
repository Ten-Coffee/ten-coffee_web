import './table-body.style.scss';
import { empresas } from '@/components/UI/organism/table/mock-data/table.mock-data.';
import { TableDataAtom } from '@/components/UI/organism/table/UI/atoms/table-data/table-data.atom';
import { icons } from '@/icons/icons';

export const TableBodyMolecule = () => {
  return (
    <tbody>
      {empresas.map((empresa) => (
        <tr key={empresa.cnpj} className={'table-row'}>
          <TableDataAtom.Default value={empresa.id} />
          <TableDataAtom.Default value={empresa.nomeEmpresa} />
          <TableDataAtom.Default value={empresa.cnpj} />
          <TableDataAtom.Default value={empresa.email} />
          <TableDataAtom.Default value={empresa.nomeRepresentante} />
          <TableDataAtom.Status value={empresa.status} />
          <TableDataAtom.Icon icon={icons.Edit} id={empresa.id} />
          <TableDataAtom.Icon icon={icons.Ellipsis.Vertical} id={empresa.id} />
        </tr>
      ))}
    </tbody>
  );
};
