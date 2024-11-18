import { CoffeeShopFormOrganism } from '../../components/UI/organism/coffee-shop-form/coffee-shop-form.organism';

import { createCoffeeShopSteps } from '@/components/templates/(privated)/coffee-shop/create/steps/create-coffee-shop.steps';
import { TitleAtom } from '@/components/UI/atoms/typography/title/title.atom';
import { StepBoxOrganism } from '@/components/UI/organism/step-box/step-box.organism';

export default function Step1Template() {
  return (
    <>
      <TitleAtom.Large value={'Cadastrar Unidade'} />
      <div className={'step-wrapper'}>
        <StepBoxOrganism steps={createCoffeeShopSteps} />
        <CoffeeShopFormOrganism />
      </div>
    </>
  );
}
