'use client';

import { useIngredientsHook } from '@/components/templates/(privated)/ingredients/use-ingredients.hook';
import { ButtonAtom } from '@/components/UI/atoms/button/button.atom';
import { TitleAtom } from '@/components/UI/atoms/typography/title/title.atom';
import { InputMolecule } from '@/components/UI/molecules/input/input.molecule';
import { ModalOrganism } from '@/components/UI/organism/modal/modal.organism';
import { TableOrganism } from '@/components/UI/organism/table/table.organism';
import './ingredients.styles.scss';
import { icons } from '@/icons/icons';

export const IngredientsTemplate = () => {
  const { handleAdd, ingredients, search, setPageSearch, modal } =
    useIngredientsHook();

  return (
    <>
      <div className={'ingredients-header'}>
        <TitleAtom.Large value={'Ingredientes'} />

        <ButtonAtom.Wrapper
          hierarchy={'outlined'}
          type={'button'}
          onClick={handleAdd}
        >
          <ButtonAtom.Icon icon={icons.Add} />
          Adicionar Ingrediente
        </ButtonAtom.Wrapper>
      </div>

      <InputMolecule.Text
        icon={icons.Search}
        position={'left'}
        placeholder={'Pesquisar ingrediente por nome'}
        onChange={(e) => setPageSearch({ search: e.target.value })}
        value={search}
      />

      <TableOrganism
        columns={ingredients.columns}
        data={ingredients.data?.content}
        rowActions={ingredients.rowActions}
        totalPages={ingredients.data?.totalPages}
        number={ingredients.data?.number ?? 0}
      />

      <ModalOrganism {...modal} />
    </>
  );
};
