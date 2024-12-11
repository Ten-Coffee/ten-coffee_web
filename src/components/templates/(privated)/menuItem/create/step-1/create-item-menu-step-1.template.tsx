import { ItemMenuFormOrganism } from '@/components/templates/(privated)/menuItem/components/UI/organism/create/item-form/item-menu-form.organism';
import { createMenuItemSteps } from '@/components/templates/(privated)/menuItem/steps/create-menu-item.steps';
import { TitleAtom } from '@/components/UI/atoms/typography/title/title.atom';
import { StepBoxOrganism } from '@/components/UI/organism/step-box/step-box.organism';

export default function CreateItemMenuStep1Template() {
  return (
    <>
      <TitleAtom.Large value={'Cadastrar Item'} />
      <div className={'step-wrapper'}>
        <StepBoxOrganism steps={createMenuItemSteps} />
        <ItemMenuFormOrganism />
      </div>
    </>
  );
}
