import { EditPasswordFormOrganism } from '@/components/templates/(privated)/user/components/UI/organism/edit-password-form/edit-password-form.organism';
import { editUserSteps } from '@/components/templates/(privated)/user/edit/steps/edit-user.steps';
import { TitleAtom } from '@/components/UI/atoms/typography/title/title.atom';
import { StepBoxOrganism } from '@/components/UI/organism/step-box/step-box.organism';

export const EditUserStep3Template = () => {
  return (
    <>
      <TitleAtom.Large value={'Alterar Senha'} />
      <div className={'step-wrapper'}>
        <StepBoxOrganism steps={editUserSteps} />
        <EditPasswordFormOrganism />
      </div>
    </>
  );
};
