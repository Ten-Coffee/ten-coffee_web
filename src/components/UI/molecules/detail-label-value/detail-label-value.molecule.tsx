import './detail-label-value.styles.scss';

interface DetailLabelValueMoleculeProps {
  label: string;
  value: string | undefined;
  isStatus?: boolean;
}

export const DetailLabelValueMolecule = ({
  label,
  value,
  isStatus
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
      ) : (
        <p className="detail-label-value__value">{value}</p>
      )}
    </div>
  );
};
