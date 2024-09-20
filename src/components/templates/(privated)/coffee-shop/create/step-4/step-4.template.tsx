'use client'; // Marcar como Client Component

import './step-4.styles.scss';

import { CoffeeShopStepBoxOrganism } from '../../components/UI/organism/coffee-shop-step-box/coffee-shop-step-box.organism';

import { DataRevisionSection } from '@/components/templates/(privated)/coffee-shop/components/UI/organism/data-revision-section/data-revision-section.organism';
import { TitleAtom } from '@/components/UI/atoms/typography/title/title.atom';

export default function Step4Template() {
  return (
    <div>
      <TitleAtom.Large value="Revisão de Dados" />
      <div className="step4-stepdata">
        <CoffeeShopStepBoxOrganism />
        <DataRevisionSection />
      </div>
    </div>
  );
}
