import '../styles/step-wrapper.styles.scss';

import { AddressFormOrganism } from '../../components/UI/organism/address-form/address-form.organism';

import { coffeeShopStepBoxData } from '@/components/templates/(privated)/coffee-shop/create/data/coffee-shop-step-box.data';
import { TitleAtom } from '@/components/UI/atoms/typography/title/title.atom';
import { StepBoxOrganism } from '@/components/UI/organism/step-box/step-box.organism';

export default function Step2Template() {
  return (
    <>
      <TitleAtom.Large value={'Cadastrar Endereço'} />
      <div className={'step-wrapper'}>
        <StepBoxOrganism steps={coffeeShopStepBoxData} />
        <AddressFormOrganism />
      </div>
    </>
  );
}
