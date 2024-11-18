import { useDropdownMenuHook } from '@/components/UI/molecules/dropdown-menu/use-dropdown-menu.hook';
import { icons } from '@/icons/icons';
import { DropdownMenuItemType } from '@/types/dropdown-menu-item.type';
import './dropdown-menu.styles.scss';

interface DropdownMenuProps {
  menuItems: DropdownMenuItemType[];
  isOpen?: boolean;
  toggle: () => void;
  id: string;
}

export const DropdownMenu = ({
  menuItems,
  isOpen,
  toggle,
  id
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
        <ul className="dropdown-menu" ref={menuRef}>
          {menuItems.map((item, index) => (
            <li
              key={index}
              className={`${item.submenu ? 'has-submenu' : ''}`}
              onMouseEnter={() => item.submenu && setOpenSubmenu(index)}
              onMouseLeave={() => item.submenu && setOpenSubmenu(null)}
            >
              <button
                className="menu-button"
                onClick={() => handleOnClick(item, index, id)}
              >
                {item.label}
                {item.submenu && (
                  <ArrowSubmenuIcon className="menu-button__icon" />
                )}
              </button>

              {item.submenu && openSubmenu === index && (
                <ul className="dropdown-menu__submenu">
                  {item.submenu.map((subItem, subIndex) => (
                    <li key={subIndex}>
                      <button
                        className="menu-button"
                        onClick={() => {
                          subItem.onClick(id);
                          toggle();
                        }}
                      >
                        {subItem.label}
                      </button>
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
