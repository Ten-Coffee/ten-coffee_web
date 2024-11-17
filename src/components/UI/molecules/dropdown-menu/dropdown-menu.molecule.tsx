'use client';

import './dropdown-menu.styles.scss';
import { useDropdownMenuHook } from '@/components/UI/molecules/dropdown-menu/use-dropdown-menu.hook';
import { icons } from '@/icons/icons';

type MenuItem = {
  label: string;
  onClick?: () => void;
  submenu?: MenuItem[];
};

interface DropdownMenuProps {
  menuItems: MenuItem[];
  isOpen?: boolean;
  toggle: () => void;
}

export const DropdownMenu = ({
  menuItems,
  isOpen,
  toggle
}: DropdownMenuProps) => {
  const { menuRef, setOpenSubmenu, handleOnClick, openSubmenu } =
    useDropdownMenuHook({
      toggle,
      isOpen
    });

  const ArrowSubmenuIcon = icons.Chevron.Right;

  return (
    <>
      {isOpen && (
        <ul className={'dropdown-menu'} ref={menuRef}>
          {menuItems.map((item, index) => (
            <li
              key={index}
              className={`${item.submenu ? 'has-submenu' : ''}`}
              onMouseEnter={() => item.submenu && setOpenSubmenu(index)}
              onMouseLeave={() => item.submenu && setOpenSubmenu(null)}
            >
              <button
                className={'menu-button'}
                onClick={() => handleOnClick(item, index)}
              >
                {item.label}
                {item.submenu && (
                  <ArrowSubmenuIcon className={'menu-button__icon'} />
                )}
              </button>

              {item.submenu && openSubmenu === index && (
                <ul className={'dropdown-menu__submenu'}>
                  {item.submenu.map((subItem, subIndex) => (
                    <li
                      key={subIndex}
                      className={'menu-button'}
                      onClick={subItem.onClick}
                    >
                      {subItem.label}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
