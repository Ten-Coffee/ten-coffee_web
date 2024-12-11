'use client';

import { useMenuItemHook } from '@/components/templates/(privated)/menuItem/use-menu-item.hook';
import { ButtonAtom } from '@/components/UI/atoms/button/button.atom';
import { TitleAtom } from '@/components/UI/atoms/typography/title/title.atom';
import { InputMolecule } from '@/components/UI/molecules/input/input.molecule';
import './menu-item.styles.scss';
import { ModalOrganism } from '@/components/UI/organism/modal/modal.organism';
import { TableOrganism } from '@/components/UI/organism/table/table.organism';
import { icons } from '@/icons/icons';

export const MenuItemTemplate = () => {
  const { onAdd, setPageSearch, menuItem, search, modal } = useMenuItemHook();

  return (
    <>
      <div className={'menu-item-header'}>
        <TitleAtom.Large value={'Cardápio'} />
        <ButtonAtom.Wrapper hierarchy={'outlined'} onClick={onAdd}>
          <ButtonAtom.Icon icon={icons.Add} />
          Adicionar Item
        </ButtonAtom.Wrapper>
      </div>

      <InputMolecule.Text
        icon={icons.Search}
        position={'left'}
        placeholder={'Pesquisar item do cardápio por nome'}
        onChange={(e) => setPageSearch({ search: e.target.value })}
        value={search}
      />

      <TableOrganism
        columns={menuItem.columns}
        data={menuItem.data?.content}
        rowActions={menuItem.rowActions}
        totalPages={menuItem.data?.totalPages}
        number={menuItem.data?.number ?? 0}
      />

      <ModalOrganism {...modal} />
    </>
  );
};
