export type DropdownMenuItemType = {
  label: string;
  onClick: (id: string) => void;
  submenu?: DropdownMenuItemType[];
};
