import './coffee-shop-read-by-id.styles.scss';

interface CoffeeShopReadByIdMoleculeProps {
  label: string;
  value: string | undefined;
  isStatus?: boolean;
}

export const CoffeeShopReadByIdMolecule = ({
  label,
  value,
  isStatus
}: CoffeeShopReadByIdMoleculeProps) => {
  const isActive = value === 'ACTIVE';
  const statusText = isActive ? 'ATIVO' : 'INATIVO';
  const statusClass = isActive ? 'active' : 'inactive';

  return (
    <div className="read-by-id-molecule">
      <label className="read-by-id-molecule__label">{label}</label>
      {isStatus ? (
        <div className="read-by-id-molecule__status">
          <div className={`status__ellipse ${statusClass}-ellipse`}></div>
          <p className={`status__value ${statusClass}`}>{statusText}</p>
        </div>
      ) : (
        <p className="read-by-id-molecule__value">{value}</p>
      )}
    </div>
  );
};
