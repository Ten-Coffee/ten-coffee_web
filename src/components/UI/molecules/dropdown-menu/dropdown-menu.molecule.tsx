import { icons } from '@/icons/icons';
import { DropdownMenuItemType } from '@/types/dropdown-menu-item.type';
import './dropdown-menu.styles.scss';
import { DropdownMenu } from '@radix-ui/themes';

interface DropdownMenuProps {
  menuItems: DropdownMenuItemType[];
  id: string;
}

export const DropdownMenuMolecule = ({ menuItems, id }: DropdownMenuProps) => {
  const EllipsisIcon = icons.Ellipsis.Vertical;

  return (
    <>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger>
          <button className={'dropdown-menu__ellipsis-button'}>
            <EllipsisIcon />
          </button>
        </DropdownMenu.Trigger>
        <DropdownMenu.Content className={'dropdown-menu'}>
          {menuItems.map((item, index) => (
            <>
              {!item?.submenu && (
                <DropdownMenu.Item
                  className={'dropdown-menu__item'}
                  key={index}
                  onClick={() => item.onClick(id)}
                >
                  {item.label}
                </DropdownMenu.Item>
              )}
              {item?.submenu && (
                <DropdownMenu.Sub>
                  <DropdownMenu.SubTrigger className={'dropdown-menu__item'}>
                    {item.label}
                  </DropdownMenu.SubTrigger>
                  <DropdownMenu.SubContent className={'dropdown-menu'}>
                    {item.submenu.map((subItem, subIndex) => (
                      <DropdownMenu.Item
                        className={'dropdown-menu__item'}
                        key={subIndex}
                        onClick={() => subItem.onClick(id)}
                      >
                        {subItem.label}
                      </DropdownMenu.Item>
                    ))}
                  </DropdownMenu.SubContent>
                </DropdownMenu.Sub>
              )}
            </>
          ))}
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    </>
  );
};
