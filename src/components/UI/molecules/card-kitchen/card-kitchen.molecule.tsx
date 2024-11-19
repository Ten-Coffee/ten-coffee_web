import React from 'react';
import './card-kitchen.molecule.scss';
import StatusKitchen from '../../atoms/status-kitchen/status-kitchen.atom';

interface CardKitchenProps {
  orderNumber: string;
  tableNumber: string;
  statusText: string;
  statusColor: string;
  preparationTime: string;
  itemCount: string;
}

const CardKitchen: React.FC<CardKitchenProps> = ({
  orderNumber,
  tableNumber,
  statusText,
  statusColor,
  preparationTime,
  itemCount
}) => {
  return (
    <div className="card-kitchen">
      <div className="card-kitchen__header">
        <span className="card-kitchen__order">Pedido #{orderNumber}</span>
        <span className="card-kitchen__table">#{tableNumber}</span>
      </div>
      <div className="card-kitchen__body">
        <StatusKitchen text={statusText} backgroundColor={statusColor} />
        <div className="card-kitchen__details">
          <div className="card-kitchen__time">
            <i className="card-kitchen__icon">⏱</i>
            {preparationTime}
          </div>
          <div className="card-kitchen__items">{itemCount} itens</div>
        </div>
      </div>
    </div>
  );
};

export default CardKitchen;
