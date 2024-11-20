'use client';

import { useInventoryHook } from '@/components/templates/(privated)/inventory/use-inventory.hook';
import { ButtonAtom } from '@/components/UI/atoms/button/button.atom';
import { TitleAtom } from '@/components/UI/atoms/typography/title/title.atom';
import { InputMolecule } from '@/components/UI/molecules/input/input.molecule';
import './inventory.styles.scss';
import { ModalOrganism } from '@/components/UI/organism/modal/modal.organism';
import { TableOrganism } from '@/components/UI/organism/table/table.organism';
import { icons } from '@/icons/icons';

export const InventoryTemplate = () => {
  const { onAdd, setPageSearch, inventory, search, modal } = useInventoryHook();

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
        onChange={(e) => setPageSearch({ search: e.target.value })}
        value={search}
      />

      <TableOrganism
        columns={inventory.columns}
        data={inventory.data?.content}
        rowActions={inventory.rowActions}
        totalPages={inventory.data?.totalPages}
        number={inventory.data?.number ?? 0}
      />

      <ModalOrganism {...modal} />
    </>
  );
};
