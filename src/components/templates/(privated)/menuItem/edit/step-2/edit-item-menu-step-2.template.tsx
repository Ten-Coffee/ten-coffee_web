'use client';

import { EditIngredientItemMenuFormOrganism } from '@/components/templates/(privated)/menuItem/components/UI/organism/edit/edit-ingredient-item-menu-form/edit-ingredient-item-menu-form.organism';
import { editMenuItemSteps } from '@/components/templates/(privated)/menuItem/steps/edit-menu-item.steps';
import { TitleAtom } from '@/components/UI/atoms/typography/title/title.atom';
import { StepBoxOrganism } from '@/components/UI/organism/step-box/step-box.organism';

export default function EditItemMenuStep2Template() {
  return (
    <>
      <TitleAtom.Large value={'Editar Item'} />
      <div className={'step-wrapper'}>
        <StepBoxOrganism steps={editMenuItemSteps} />
        <EditIngredientItemMenuFormOrganism />
      </div>
    </>
  );
}
