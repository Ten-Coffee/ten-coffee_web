'use client';

import { useMenuItemHook } from '@/components/templates/(privated)/menuItem/use-menu-item.hook';
import { ButtonAtom } from '@/components/UI/atoms/button/button.atom';
import { TitleAtom } from '@/components/UI/atoms/typography/title/title.atom';
import { icons } from '@/icons/icons';
import './menu-item.styles.scss';

export const MenuItemTemplate = () => {
  const { onAdd } = useMenuItemHook();

  return (
    <>
      <div className={'menu-item-header'}>
        <TitleAtom.Large value={'Cardápio'} />
        <ButtonAtom.Wrapper hierarchy={'outlined'} onClick={onAdd}>
          <ButtonAtom.Icon icon={icons.Add} />
          Adicionar Item
        </ButtonAtom.Wrapper>
      </div>
    </>
  );
};
