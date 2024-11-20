import { IngredientsFormOrganism } from '@/components/templates/(privated)/ingredients/components/UI/organism/ingredients-form/ingredients-form.organism';
import { createIngredientsStep } from '@/components/templates/(privated)/ingredients/steps/create-ingredients.step';
import { TitleAtom } from '@/components/UI/atoms/typography/title/title.atom';
import { StepBoxOrganism } from '@/components/UI/organism/step-box/step-box.organism';

export const CreateIngredientStep1Template = () => {
  return (
    <>
      <TitleAtom.Large value={'Cadastrar Tipo de Insumo'} />

      <div className={'step-wrapper'}>
        <StepBoxOrganism steps={createIngredientsStep} />
        <IngredientsFormOrganism />
      </div>
    </>
  );
};
