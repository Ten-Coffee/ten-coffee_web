import { EditIngredientFormOrganism } from '@/components/templates/(privated)/ingredients/components/UI/organism/edit-ingredient-form/edit-ingredient-form.organism';
import { editIngredientsStep } from '@/components/templates/(privated)/ingredients/steps/edit-ingredients.step';
import { TitleAtom } from '@/components/UI/atoms/typography/title/title.atom';
import { StepBoxOrganism } from '@/components/UI/organism/step-box/step-box.organism';

export const EditIngredientStep1Template = () => {
  return (
    <>
      <TitleAtom.Large value={'Editar Ingredientes'} />
      <div className={'step-wrapper'}>
        <StepBoxOrganism steps={editIngredientsStep} />
        <EditIngredientFormOrganism />
      </div>
    </>
  );
};
