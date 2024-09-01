import './status.table-data.style.scss';
import { BodyAtom } from '@/components/UI/atoms/typography/body/body.atom';

interface StatusTableDataAtomProps {
  value: boolean;
}

export const StatusTableDataAtom = ({ value }: StatusTableDataAtomProps) => {
  const status = value ? 'Ativo' : 'Inativo';
  const className = value ? 'active' : 'inactive';

  return (
    <td className={`${className} status-table-data`}>
      <div className={'status-table-data__ellipse'}></div>
      <BodyAtom value={status} />
    </td>
  );
};
