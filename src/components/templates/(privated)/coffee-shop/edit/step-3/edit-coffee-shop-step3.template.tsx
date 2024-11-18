import { EditAddressFormOrganism } from '@/components/templates/(privated)/coffee-shop/components/UI/organism/edit-address-form/edit-address-form.organism';
import { editCoffeeShopSteps } from '@/components/templates/(privated)/coffee-shop/edit/steps/edit-coffee-shop-steps';
import { TitleAtom } from '@/components/UI/atoms/typography/title/title.atom';
import { StepBoxOrganism } from '@/components/UI/organism/step-box/step-box.organism';

export const EditCoffeeShopStep3Template = () => {
  return (
    <>
      <TitleAtom.Large value={'Editar Cafeteria'} />
      <div className={'step-wrapper'}>
        <StepBoxOrganism steps={editCoffeeShopSteps} />
        <EditAddressFormOrganism />
      </div>
    </>
  );
};
