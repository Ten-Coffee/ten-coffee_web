import React from 'react';
import './status-kitchen.atom.scss';

interface StatuskitchenProps {
  text: string;
  backgroundColor: string;
}

const StatusKitchen: React.FC<StatuskitchenProps> = ({
  text,
  backgroundColor
}) => {
  return (
    <div className="status-kitchen" style={{ backgroundColor }}>
      {text}
    </div>
  );
};

export default StatusKitchen;
