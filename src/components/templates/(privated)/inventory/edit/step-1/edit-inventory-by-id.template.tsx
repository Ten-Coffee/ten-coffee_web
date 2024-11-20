'use client';

import { EditInventoryFormOrganism } from '@/components/templates/(privated)/inventory/components/UI/organism/edit-inventory-form/edit-inventory-form.organism';
import { editInventoryStep } from '@/components/templates/(privated)/inventory/steps/edit-inventory.step';
import { TitleAtom } from '@/components/UI/atoms/typography/title/title.atom';
import { StepBoxOrganism } from '@/components/UI/organism/step-box/step-box.organism';

export const EditInventoryByIdTemplate = () => {
  return (
    <>
      <TitleAtom.Large value={'Editar Item'} />
      <div className={'step-wrapper'}>
        <StepBoxOrganism steps={editInventoryStep} />
        <EditInventoryFormOrganism />
      </div>
    </>
  );
};
