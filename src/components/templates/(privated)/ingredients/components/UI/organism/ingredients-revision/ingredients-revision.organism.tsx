'use client';

import { DataRevisionOrganism } from '@/components/templates/(privated)/coffee-shop/components/UI/organism/data-revision/data-revision.organism';
import { useIngredientsRevisionHook } from '@/components/templates/(privated)/ingredients/components/UI/organism/ingredients-revision/use-ingredients-revision.hook';
import { ButtonAtom } from '@/components/UI/atoms/button/button.atom';

export const IngredientsRevisionOrganism = () => {
  const { handleBack, ingredient, mutation } = useIngredientsRevisionHook();

  return (
    <div className={'data-revision-section'}>
      <div className={'data-revision-section__fields-section'}>
        <DataRevisionOrganism title={'Tipos de Insumo'} data={ingredient} />
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
          onClick={() => mutation.mutate()}
        >
          Cadastrar
        </ButtonAtom.Wrapper>
      </div>
    </div>
  );
};
