'use client';

import { useInventoryHook } from '@/components/templates/(privated)/inventory/use-inventory.hook';
import { ButtonAtom } from '@/components/UI/atoms/button/button.atom';
import { TitleAtom } from '@/components/UI/atoms/typography/title/title.atom';
import { InputMolecule } from '@/components/UI/molecules/input/input.molecule';
import { icons } from '@/icons/icons';
import './inventory.styles.scss';

export const InventoryTemplate = () => {
  const { onAdd } = useInventoryHook();

  return (
    <>
      <div className={'inventory-header'}>
        <TitleAtom.Large value={'Estoque'} />
        <ButtonAtom.Wrapper hierarchy={'outlined'} onClick={onAdd}>
          <ButtonAtom.Icon icon={icons.Add} />
          Adicionar Item
        </ButtonAtom.Wrapper>
      </div>

      <InputMolecule.Text
        icon={icons.Search}
        position={'left'}
        placeholder={'Pesquisar item do estoque por nome'}
        // onChange={(e) => setPageSearch({ search: e.target.value })}
        // value={search}
      />

      {/*<TableOrganism*/}
      {/*  columns={columns}*/}
      {/*  data={usersData?.content}*/}
      {/*  rowActions={rowActions}*/}
      {/*  totalPages={usersData?.totalPages}*/}
      {/*  number={usersData?.number ?? 0}*/}
      {/*/>*/}

      {/*<ModalOrganism {...modal} />*/}
    </>
  );
};
