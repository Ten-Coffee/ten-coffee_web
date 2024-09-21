'use client';

import './step-3.styles.scss';

import { CoffeeShopStepBoxOrganism } from '../../components/UI/organism/coffee-shop-step-box/coffee-shop-step-box.organism';
import { RepresentativeFormOrganism } from '../../components/UI/organism/representative-form/representative-form.organism';

import { TitleAtom } from '@/components/UI/atoms/typography/title/title.atom';

export default function Step3Template() {
  return (
    <div>
      <TitleAtom.Large value="Cadastrar Representante" />
      <div className="step3__stepform">
        <CoffeeShopStepBoxOrganism />
        <RepresentativeFormOrganism />
      </div>
    </div>
  );
}
