'use client';

import { DataRevisionOrganism } from '@/components/templates/(privated)/coffee-shop/components/UI/organism/data-revision/data-revision.organism';
import { useInventoryDataRevisionHook } from '@/components/templates/(privated)/inventory/components/UI/organism/inventory-data-revision/use-inventory-data-revision.hook';
import { ButtonAtom } from '@/components/UI/atoms/button/button.atom';

export const InventoryDataRevisionOrganism = () => {
  const { handleBack, inventory, createInventory } =
    useInventoryDataRevisionHook();

  return (
    <div className={'data-revision-section'}>
      <div className={'data-revision-section__fields-section'}>
        <DataRevisionOrganism title={'Item do Estoque'} data={inventory} />
      </div>

      <div className={'data-revision-section__buttons'}>
        <ButtonAtom.Wrapper
          hierarchy={'outlined'}
          type={'button'}
          onClick={handleBack}
        >
          Voltar
        </ButtonAtom.Wrapper>
        <ButtonAtom.Wrapper
          hierarchy={'enabled'}
          type={'button'}
          onClick={createInventory}
        >
          Cadastrar
        </ButtonAtom.Wrapper>
      </div>
    </div>
  );
};
