import './detail-label-value.styles.scss';
import { TableStatusFilterAtom } from '@/components/UI/atoms/table-status-filter/table-status-filter.atom';
import { TableStatusEnum } from '@/enums/table-status.enum';

interface DetailLabelValueMoleculeProps {
  label: string;
  value: string | undefined;
  isStatus?: boolean;
  tableStatus?: TableStatusEnum;
}

export const DetailLabelValueMolecule = ({
  label,
  value,
  isStatus,
  tableStatus
}: DetailLabelValueMoleculeProps) => {
  const isActive = value === 'ACTIVE';
  const statusText = isActive ? 'ATIVO' : 'INATIVO';
  const statusClass = isActive ? 'active' : 'inactive';

  return (
    <div className="detail-label-value">
      <label className="detail-label-value__label">{label}</label>
      {isStatus ? (
        <div className="detail-label-value__status">
          <div className={`status__ellipse ${statusClass}-ellipse`}></div>
          <p className={`status__value ${statusClass}`}>{statusText}</p>
        </div>
      ) : tableStatus ? (
        <TableStatusFilterAtom status={tableStatus} />
      ) : (
        <p className="detail-label-value__value">{value}</p>
      )}
    </div>
  );
};
