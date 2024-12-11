import { DiviserAtom } from '@/components/UI/atoms/diviser/diviser.atom';
import { LabelAtom } from '@/components/UI/atoms/typography/label/label.atom';
import { TitleAtom } from '@/components/UI/atoms/typography/title/title.atom';
import React from 'react';
import './order-item.styles.scss';

interface OrderItemProps {
  image: string;
  name: string;
  quantity: number;
  price: number;
  orderNumber: number;
  status: string;
}

export const OrderItemMolecule: React.FC<OrderItemProps> = ({
  image,
  name,
  quantity,
  price,
  orderNumber,
  status
}) => {
  return (
    <div className="order">
      <div></div>
      <div className="order__title">
        <TitleAtom.Medium value={`Item ${orderNumber}`} />
        <div className="order__title__status">
          <LabelAtom value={'Status'} size="small" />
          <LabelAtom value={status} size="medium" />
        </div>
      </div>
      <DiviserAtom />
      <div className="order-item">
        <div className="order-item__details">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={image} alt={name} className="order-item__image" />
          <div className="order-item__infos">
            <LabelAtom value={name} size="large" />
            <LabelAtom
              value={`${quantity} unidade${quantity > 1 ? 's' : ''}`}
              size="small"
            />
          </div>
        </div>
        <LabelAtom
          value={`R$ ${price.toFixed(2)}`}
          size="large"
          disabled={price === 0}
        />
      </div>
    </div>
  );
};
