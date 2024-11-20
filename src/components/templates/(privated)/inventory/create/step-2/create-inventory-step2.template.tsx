import { InventoryDataRevisionOrganism } from '@/components/templates/(privated)/inventory/components/UI/organism/inventory-data-revision/inventory-data-revision.organism';
import { createInventorySteps } from '@/components/templates/(privated)/inventory/steps/create-inventory.step';
import { TitleAtom } from '@/components/UI/atoms/typography/title/title.atom';
import { StepBoxOrganism } from '@/components/UI/organism/step-box/step-box.organism';

export const CreateInventoryStep2Template = () => {
  return (
    <>
      <TitleAtom.Large value={'Revisão de Dados'} />
      <div className={'step-wrapper'}>
        <StepBoxOrganism steps={createInventorySteps} />
        <InventoryDataRevisionOrganism />
      </div>
    </>
  );
};
