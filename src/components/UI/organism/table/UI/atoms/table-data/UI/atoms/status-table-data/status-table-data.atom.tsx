import './status.table-data.style.scss';
import { StatusType } from '@/types/status.type';

interface StatusTableDataAtomProps {
  value: StatusType;
}

export const StatusTableDataAtom = ({ value }: StatusTableDataAtomProps) => {
  const status = value === 'ACTIVE' ? 'Ativo' : 'Inativo';
  const className = value === 'ACTIVE' ? 'active' : 'inactive';

  return (
    <td className={'status-table-data'}>
      <div className={`${className} status-table-data__status-wrapper`}>
        <div className={'status-wrapper__ellipse'}></div>
        {status}
      </div>
    </td>
  );
};
