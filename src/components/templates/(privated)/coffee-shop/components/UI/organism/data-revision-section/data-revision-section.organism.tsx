'use client';

import { useDataRevisionFormHook } from '@/components/templates/(privated)/coffee-shop/components/UI/organism/data-revision-section/use-data-revision-section-form.hook';
import { DataRevisionOrganism } from '@/components/templates/(privated)/coffee-shop/components/UI/organism/data-revision/data-revision.organism';
import { ButtonAtom } from '@/components/UI/atoms/button/button.atom';
import { DiviserAtom } from '@/components/UI/atoms/diviser/diviser.atom';

import './data-revision-section.styles.scss';

export const DataRevisionSectionOrganism = () => {
  const {
    coffeeShop,
    address,
    representative,
    handleBack,
    handleCreate,
    mutation
  } = useDataRevisionFormHook();

  return (
    <div className={'data-revision-section'}>
      <div className={'data-revision-section__fields-section'}>
        <DataRevisionOrganism title={'Cafeteria'} data={coffeeShop} />
        <DiviserAtom />
        <DataRevisionOrganism title={'Endereço'} data={address} />
        <DiviserAtom />
        <DataRevisionOrganism title={'Representante'} data={representative} />
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
          onClick={handleCreate}
        >
          Cadastrar
        </ButtonAtom.Wrapper>
      </div>

      {mutation.isError && (
        <div className="error-message">Erro ao cadastrar. Tente novamente.</div>
      )}
    </div>
  );
};
