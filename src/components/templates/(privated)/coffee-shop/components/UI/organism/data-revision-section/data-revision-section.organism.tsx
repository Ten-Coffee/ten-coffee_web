'use client';

import './data-revision-section.styles.scss';
import addressData from './data/address.data';
import unidadeData from './data/coffee-shop.data';
import representativeData from './data/representative.data';

import { useDataRevisionSectionHook } from '@/components/templates/(privated)/coffee-shop/components/UI/organism/data-revision-section/use-data-revision-section.hook';
import { DataRevisionOrganism } from '@/components/templates/(privated)/coffee-shop/components/UI/organism/data-revision/data-revision.organism';
import { ButtonAtom } from '@/components/UI/atoms/button/button.atom';
import { DiviserAtom } from '@/components/UI/atoms/diviser/diviser.atom';

export const DataRevisionSectionOrganism = () => {
  const { handleBack, handleCreate } = useDataRevisionSectionHook();

  return (
    <div className={'data-revision-section'}>
      <div className={'data-revision-section__fields-section'}>
        <DataRevisionOrganism title={'Cafeteria'} data={unidadeData} />
        <DiviserAtom />
        <DataRevisionOrganism title={'Endereço'} data={addressData} />
        <DiviserAtom />
        <DataRevisionOrganism
          title={'Representante'}
          data={representativeData}
        />
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
          type={'submit'}
          onClick={handleCreate}
        >
          Cadastrar
        </ButtonAtom.Wrapper>
      </div>
    </div>
  );
};
