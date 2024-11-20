import { InventoryFormOrganism } from '@/components/templates/(privated)/inventory/components/UI/organism/inventory-form/inventory-form.organism';
import { createInventorySteps } from '@/components/templates/(privated)/inventory/steps/create-inventory.step';
import { TitleAtom } from '@/components/UI/atoms/typography/title/title.atom';
import { StepBoxOrganism } from '@/components/UI/organism/step-box/step-box.organism';

export const CreateInventoryStep1Template = () => {
  return (
    <>
      <TitleAtom.Large value={'Cadastrar Item'} />
      <div className={'step-wrapper'}>
        <StepBoxOrganism steps={createInventorySteps} />
        <InventoryFormOrganism />
      </div>
    </>
  );
};
