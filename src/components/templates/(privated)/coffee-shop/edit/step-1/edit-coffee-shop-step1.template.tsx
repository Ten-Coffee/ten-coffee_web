'use client';

import { OverviewOrganism } from '@/components/templates/(privated)/coffee-shop/components/UI/organism/overview/overview.organism';
import { useEditCoffeeShopStep1Hook } from '@/components/templates/(privated)/coffee-shop/edit/step-1/use-edit-coffee-shop-step1.hook';
import { editCoffeeShopSteps } from '@/components/templates/(privated)/coffee-shop/edit/steps/edit-coffee-shop-steps';
import { TitleAtom } from '@/components/UI/atoms/typography/title/title.atom';
import { StepBoxOrganism } from '@/components/UI/organism/step-box/step-box.organism';

export const EditCoffeeShopStep1Template = () => {
  const { address, coffeeShop } = useEditCoffeeShopStep1Hook();

  return (
    <>
      <TitleAtom.Large value={'Editar Credenciais'} />
      <div className={'step-wrapper'}>
        <StepBoxOrganism steps={editCoffeeShopSteps} />
        <OverviewOrganism address={address} coffeeShop={coffeeShop} />
      </div>
    </>
  );
};
