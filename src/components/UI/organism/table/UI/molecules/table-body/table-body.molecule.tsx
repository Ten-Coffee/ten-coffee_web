import { TableDataAtom } from '../../atoms/table-data/table-data.atom';
import './table-body.style.scss';

import { icons } from '@/icons/icons';

interface Empresa {
  id: number;
  nomeEmpresa: string;
  cnpj: string;
  email: string;
  nomeRepresentante: string;
  status: boolean;
}

interface TableBodyMoleculeProps {
  data: Empresa[];
}

export const TableBodyMolecule = ({ data }: TableBodyMoleculeProps) => {
  return (
    <tbody>
      {data.length === 0 ? (
        <tr>
          <td colSpan={8}>Nenhum registro encontrado</td>
        </tr>
      ) : (
        data.map((empresa) => (
          <tr key={empresa.cnpj} className={'table-row'}>
            <TableDataAtom.Default value={empresa.id} />
            <TableDataAtom.Default value={empresa.nomeEmpresa} />
            <TableDataAtom.Default value={empresa.cnpj} />
            <TableDataAtom.Default value={empresa.email} />
            <TableDataAtom.Default value={empresa.nomeRepresentante} />
            <TableDataAtom.Status value={empresa.status} />
            <TableDataAtom.Icon icon={icons.Edit} id={empresa.id} />
            <TableDataAtom.Icon
              icon={icons.Ellipsis.Vertical}
              id={empresa.id}
            />
          </tr>
        ))
      )}
    </tbody>
  );
};
