import { IngredientsRevisionOrganism } from '@/components/templates/(privated)/ingredients/components/UI/organism/ingredients-revision/ingredients-revision.organism';
import { createIngredientsStep } from '@/components/templates/(privated)/ingredients/steps/create-ingredients.step';
import { TitleAtom } from '@/components/UI/atoms/typography/title/title.atom';
import { StepBoxOrganism } from '@/components/UI/organism/step-box/step-box.organism';

export const CreateIngredientStep2Template = () => {
  return (
    <>
      <TitleAtom.Large value={'Revisão de Dados'} />
      <div className={'step-wrapper'}>
        <StepBoxOrganism steps={createIngredientsStep} />
        <IngredientsRevisionOrganism />
      </div>
    </>
  );
};
