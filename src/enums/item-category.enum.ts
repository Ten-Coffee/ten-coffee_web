export enum ItemCategoryEnum {
  FOOD = 'FOOD',
  DRINK = 'DRINK'
}

export const getItemCategoryLabel = {
  [ItemCategoryEnum.FOOD]: 'Comida',
  [ItemCategoryEnum.DRINK]: 'Bebida'
};

export const itemCategoryLabelsForSelect = Object.values(
  getItemCategoryLabel
).map((label) => ({
  id: label,
  value: label
}));

export const mapItemCategory: { [key: string]: ItemCategoryEnum } = {
  Comida: ItemCategoryEnum.FOOD,
  Bebida: ItemCategoryEnum.DRINK
};
