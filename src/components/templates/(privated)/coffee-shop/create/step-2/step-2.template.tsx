import { AddressFormOrganism } from '../../components/UI/organism/address-form/address-form.organism';

import { createCoffeeShopSteps } from '@/components/templates/(privated)/coffee-shop/create/steps/create-coffee-shop.steps';
import { TitleAtom } from '@/components/UI/atoms/typography/title/title.atom';
import { StepBoxOrganism } from '@/components/UI/organism/step-box/step-box.organism';

export default function Step2Template() {
  return (
    <>
      <TitleAtom.Large value={'Cadastrar Endereço'} />
      <div className={'step-wrapper'}>
        <StepBoxOrganism steps={createCoffeeShopSteps} />
        <AddressFormOrganism />
      </div>
    </>
  );
}
