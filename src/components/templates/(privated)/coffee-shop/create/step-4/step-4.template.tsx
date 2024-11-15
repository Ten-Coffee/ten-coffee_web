'use client';

import '../styles/step-wrapper.styles.scss';
import { DataRevisionSectionOrganism } from '@/components/templates/(privated)/coffee-shop/components/UI/organism/data-revision-section/data-revision-section.organism';
import { coffeeShopStepBoxData } from '@/components/templates/(privated)/coffee-shop/create/data/coffee-shop-step-box.data';
import { TitleAtom } from '@/components/UI/atoms/typography/title/title.atom';
import { StepBoxOrganism } from '@/components/UI/organism/step-box/step-box.organism';

export default function Step4Template() {
  return (
    <>
      <TitleAtom.Large value={'Revisão de Dados'} />
      <div className={'step-wrapper'}>
        <StepBoxOrganism steps={coffeeShopStepBoxData} />
        <DataRevisionSectionOrganism />
      </div>
    </>
  );
}
