import './step-2.styles.scss';

import { AddressFormOrganism } from '../../components/UI/organism/address-form/address-form.organism';
import { CoffeeShopStepBoxOrganism } from '../../components/UI/organism/coffee-shop-step-box/coffee-shop-step-box.organism';

import { TitleAtom } from '@/components/UI/atoms/typography/title/title.atom';

export default function Step2Template() {
  return (
    <div>
      <TitleAtom.Large value="Cadastrar Endereço" />
      <div className="step2__stepform">
        <CoffeeShopStepBoxOrganism />
        <AddressFormOrganism />
      </div>
    </div>
  );
}
