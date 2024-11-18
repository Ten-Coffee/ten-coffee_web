'use client';

import { DataRevisionSectionOrganism } from '@/components/templates/(privated)/coffee-shop/components/UI/organism/data-revision-section/data-revision-section.organism';
import { createCoffeeShopSteps } from '@/components/templates/(privated)/coffee-shop/create/steps/create-coffee-shop.steps';
import { TitleAtom } from '@/components/UI/atoms/typography/title/title.atom';
import { StepBoxOrganism } from '@/components/UI/organism/step-box/step-box.organism';

export default function Step4Template() {
  return (
    <>
      <TitleAtom.Large value={'Revisão de Dados'} />
      <div className={'step-wrapper'}>
        <StepBoxOrganism steps={createCoffeeShopSteps} />
        <DataRevisionSectionOrganism />
      </div>
    </>
  );
}
