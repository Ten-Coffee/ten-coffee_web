'use client';

import '../styles/step-wrapper.styles.scss';
import { RepresentativeFormOrganism } from '../../components/UI/organism/representative-form/representative-form.organism';

import { coffeeShopStepBoxData } from '@/components/templates/(privated)/coffee-shop/create/data/coffee-shop-step-box.data';
import { TitleAtom } from '@/components/UI/atoms/typography/title/title.atom';
import { StepBoxOrganism } from '@/components/UI/organism/step-box/step-box.organism';

export default function Step3Template() {
  return (
    <>
      <TitleAtom.Large value={'Cadastrar Representante'} />
      <div className={'step-wrapper'}>
        <StepBoxOrganism steps={coffeeShopStepBoxData} />
        <RepresentativeFormOrganism />
      </div>
    </>
  );
}
