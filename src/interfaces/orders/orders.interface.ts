export interface OrderExtraInterface {
  ingredientId: string;
  quantity: number;
}

export interface OrderRemovalInterface {
  ingredientId: string;
  quantity: number;
}

export interface OrdersInterface {
  id: number;
  tableId: string;
  orderStatus: OrderStatusEnum;
  orderDate: string;
  orderItems: {
    menuItemId: string;
    quantity: number;
    orderExtra?: OrderExtraInterface[];
    orderRemoval?: OrderRemovalInterface[];
    orderItemStatus: string;
  }[];
}
export enum OrderStatusEnum {
  PENDING = 'Pendente',
  PREPARING = 'Preparando',
  READY = 'Pronto',
  CANCELED = 'Cancelado'
}
