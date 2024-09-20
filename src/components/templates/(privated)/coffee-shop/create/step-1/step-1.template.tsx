import './step-1.styles.scss';

import { CoffeeShopFormOrganism } from '../../components/UI/organism/coffee-shop-form/coffee-shop-form.organism';
import { CoffeeShopStepBoxOrganism } from '../../components/UI/organism/coffee-shop-step-box/coffee-shop-step-box.organism';

import { TitleAtom } from '@/components/UI/atoms/typography/title/title.atom';

export default function Step1Template() {
  return (
    <div>
      <TitleAtom.Large value="Cadastrar Unidade" />
      <div className="step1__stepform">
        <CoffeeShopStepBoxOrganism />
        <CoffeeShopFormOrganism />
      </div>
    </div>
  );
}
