'use client';

import { DataRevision } from '@/components/templates/(privated)/coffee-shop/components/UI/organism/data-revision/data-revision.organism';
import addressData from '@/components/templates/(privated)/coffee-shop/components/UI/organism/data-revision/data/address.data';
import unidadeData from '@/components/templates/(privated)/coffee-shop/components/UI/organism/data-revision/data/coffee-shop.data';
import representativeData from '@/components/templates/(privated)/coffee-shop/components/UI/organism/data-revision/data/representative.data';
import { ButtonAtom } from '@/components/UI/atoms/button/button.atom';

import './data-revision-section.styles.scss';
import { useDataRevisionSection } from '@/components/templates/(privated)/coffee-shop/components/UI/organism/data-revision-section/use-data-revision-section.hook';

export const DataRevisionSection = () => {
  const { navigateTo } = useDataRevisionSection();

  const handleBack = () => {
    navigateTo('/coffee-shop/create/step-3');
  };

  const handleCreate = () => {
    navigateTo('/');
  };
  return (
    <div className="data-revision-section">
      <div className="data-revison-section__data">
        <DataRevision
          coffeeShopData={unidadeData}
          addressData={addressData}
          representativeData={representativeData}
        />
        <div className="data-revision-section__data__buttons">
          <ButtonAtom.Wrapper
            hierarchy="outlined"
            type={'button'}
            onClick={handleBack}
          >
            Voltar
          </ButtonAtom.Wrapper>
          <ButtonAtom.Wrapper
            hierarchy="enabled"
            type={'submit'}
            onClick={handleCreate}
          >
            Cadastrar
          </ButtonAtom.Wrapper>
        </div>
      </div>
    </div>
  );
};
