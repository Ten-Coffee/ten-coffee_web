import { ItemMenuDataRevisionOrganism } from '@/components/templates/(privated)/menuItem/components/UI/organism/create/item-menu-data-revision/item-menu-data-revision.organism';
import { createMenuItemSteps } from '@/components/templates/(privated)/menuItem/steps/create-menu-item.steps';
import { TitleAtom } from '@/components/UI/atoms/typography/title/title.atom';
import { StepBoxOrganism } from '@/components/UI/organism/step-box/step-box.organism';

export default function CreateItemMenuStep3Template() {
  return (
    <>
      <TitleAtom.Large value={'Revisão de Dados'} />
      <div className={'step-wrapper'}>
        <StepBoxOrganism steps={createMenuItemSteps} />
        <ItemMenuDataRevisionOrganism />
      </div>
    </>
  );
}
