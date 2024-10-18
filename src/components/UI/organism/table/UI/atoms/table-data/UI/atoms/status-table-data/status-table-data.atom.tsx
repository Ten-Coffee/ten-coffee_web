import './status.table-data.style.scss';

interface StatusTableDataAtomProps {
  value: boolean;
}

export const StatusTableDataAtom = ({ value }: StatusTableDataAtomProps) => {
  const status = value ? 'Ativo' : 'Inativo';
  const className = value ? 'active' : 'inactive';

  return (
    <td className={'status-table-data'}>
      <div className={`${className} status-table-data__status-wrapper`}>
        <div className={'status-wrapper__ellipse'}></div>
        {status}
      </div>
    </td>
  );
};
