import React from 'react';
import CardKitchen from '@/components/UI/molecules/card-kitchen/card-kitchen.molecule';
import './kitchen-template.scss';

export const KitchenTemplate = () => {
  return (
    <div className="kitchen-template">
      {Array.from({ length: 5 }).map((_, index) => (
        <CardKitchen
          key={index}
          orderNumber={`00${index + 1}`}
          tableNumber={`00${index + 1}`}
          statusText="Preparo"
          statusColor="#FFA000"
          preparationTime={`${15 + index * 5} min`}
          itemCount={`${2 + index} itens`}
        />
      ))}
    </div>
  );
};
