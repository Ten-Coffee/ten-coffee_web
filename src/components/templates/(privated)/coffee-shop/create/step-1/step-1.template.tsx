import '../styles/step-wrapper.styles.scss';

import { CoffeeShopFormOrganism } from '../../components/UI/organism/coffee-shop-form/coffee-shop-form.organism';

import { coffeeShopStepBoxData } from '@/components/templates/(privated)/coffee-shop/create/data/coffee-shop-step-box.data';
import { TitleAtom } from '@/components/UI/atoms/typography/title/title.atom';
import { StepBoxOrganism } from '@/components/UI/organism/step-box/step-box.organism';

export default function Step1Template() {
  return (
    <>
      <TitleAtom.Large value={'Cadastrar Unidade'} />
      <div className={'step-wrapper'}>
        <StepBoxOrganism steps={coffeeShopStepBoxData} />
        <CoffeeShopFormOrganism />
      </div>
    </>
  );
}
