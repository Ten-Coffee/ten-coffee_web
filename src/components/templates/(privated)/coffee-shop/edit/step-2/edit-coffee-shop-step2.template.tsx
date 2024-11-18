import { EditCoffeeShopFormOrganism } from '@/components/templates/(privated)/coffee-shop/components/UI/organism/edit-coffee-shop-form/edit-coffee-shop-form.organism';
import { editCoffeeShopSteps } from '@/components/templates/(privated)/coffee-shop/edit/steps/edit-coffee-shop-steps';
import { TitleAtom } from '@/components/UI/atoms/typography/title/title.atom';
import { StepBoxOrganism } from '@/components/UI/organism/step-box/step-box.organism';

export const EditCoffeeShopStep2Template = () => {
  return (
    <>
      <TitleAtom.Large value={'Editar Cafeteria'} />
      <div className={'step-wrapper'}>
        <StepBoxOrganism steps={editCoffeeShopSteps} />
        <EditCoffeeShopFormOrganism />
      </div>
    </>
  );
};
