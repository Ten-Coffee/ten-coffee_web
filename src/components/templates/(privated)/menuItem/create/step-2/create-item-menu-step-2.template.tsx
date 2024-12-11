import { ItemMenuIngredientsFormOrganism } from '@/components/templates/(privated)/menuItem/components/UI/organism/create/item-menu-ingredients-form/item-menu-ingredients-form.organism';
import { createMenuItemSteps } from '@/components/templates/(privated)/menuItem/steps/create-menu-item.steps';
import { TitleAtom } from '@/components/UI/atoms/typography/title/title.atom';
import { StepBoxOrganism } from '@/components/UI/organism/step-box/step-box.organism';

export default function CreateItemMenuStep2Template() {
  return (
    <>
      <TitleAtom.Large value={'Cadastrar Ingredientes'} />
      <div className={'step-wrapper'}>
        <StepBoxOrganism steps={createMenuItemSteps} />
        <ItemMenuIngredientsFormOrganism />
      </div>
    </>
  );
}
