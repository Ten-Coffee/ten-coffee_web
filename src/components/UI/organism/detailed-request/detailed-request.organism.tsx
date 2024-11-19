import React from 'react';
import './detailed-request.organism.scss';
import StatusKitchen from '../../atoms/status-kitchen/status-kitchen.atom';

interface OrderItem {
  image: string;
  name: string;
  quantity: number;
  price: string;
}

interface DetailedRequestProps {
  orderNumber: string;
  tableNumber: string;
  statusText: string;
  statusColor: string;
  preparationTime: string;
  itemCount: string;
  items: OrderItem[];
  onStatusChange: () => void;
}

const DetailedRequest: React.FC<DetailedRequestProps> = ({
  orderNumber,
  tableNumber,
  statusText,
  statusColor,
  preparationTime,
  itemCount,
  items,
  onStatusChange
}) => {
  return (
    <div className="detailed-request">
      <div className="detailed-request__header">
        <h3 className="detailed-request__title">Pedido #{orderNumber}</h3>
        <StatusKitchen text={statusText} backgroundColor={statusColor} />
      </div>
      <div className="detailed-request__info">
        <div className="detailed-request__row">
          <span>Mesa</span>
          <span>#{tableNumber}</span>
        </div>
        <div className="detailed-request__row">
          <span>Tempo decorrido</span>
          <span>{preparationTime}</span>
        </div>
        <div className="detailed-request__row">
          <span>Quantidades</span>
          <span>{itemCount}</span>
        </div>
      </div>
      <div className="detailed-request__items">
        <h4 className="detailed-request__items-title">Itens dos pedidos</h4>
        {items.map((item, index) => (
          <div className="detailed-request__item" key={index}>
            <img
              src={item.image}
              alt={item.name}
              className="detailed-request__item-image"
            />
            <div className="detailed-request__item-details">
              <p className="detailed-request__item-name">{item.name}</p>
              <p className="detailed-request__item-quantity">
                {item.quantity} unidade{item.quantity > 1 ? 's' : ''}
              </p>
            </div>
            <span className="detailed-request__item-price">{item.price}</span>
          </div>
        ))}
      </div>
      <button className="detailed-request__button" onClick={onStatusChange}>
        <span>✔</span> Pronto
      </button>
    </div>
  );
};

export default DetailedRequest;
