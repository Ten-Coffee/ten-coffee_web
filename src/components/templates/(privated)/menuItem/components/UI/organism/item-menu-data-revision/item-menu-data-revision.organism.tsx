'use client';

import { DataRevisionOrganism } from '@/components/templates/(privated)/coffee-shop/components/UI/organism/data-revision/data-revision.organism';
import { useItemMenuDataRevisionFormHook } from '@/components/templates/(privated)/menuItem/components/UI/organism/item-menu-data-revision/use-item-menu-data-revision.hook';
import { ButtonAtom } from '@/components/UI/atoms/button/button.atom';
import { DiviserAtom } from '@/components/UI/atoms/diviser/diviser.atom';

export const ItemMenuDataRevisionOrganism = () => {
  const { menuItemData, ingredientsData, handleBack, handleCreate } =
    useItemMenuDataRevisionFormHook();

  return (
    <div className="data-revision-section">
      <div className="data-revision-section__fields-section">
        <DataRevisionOrganism title="Item" data={menuItemData.details} />
        <DiviserAtom />
        <DataRevisionOrganism title="Ingredientes" data={ingredientsData} />
      </div>

      <div className="data-revision-section__buttons">
        <ButtonAtom.Wrapper
          hierarchy="outlined"
          type="button"
          onClick={handleBack}
        >
          Voltar
        </ButtonAtom.Wrapper>
        <ButtonAtom.Wrapper
          hierarchy="enabled"
          type="button"
          onClick={handleCreate}
        >
          Cadastrar
        </ButtonAtom.Wrapper>
      </div>
    </div>
  );
};
