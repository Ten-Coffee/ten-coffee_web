import { EditUserFormOrganism } from '@/components/templates/(privated)/user/components/UI/organism/edit-user-form/edit-user-form.organism';
import { editUserSteps } from '@/components/templates/(privated)/user/edit/steps/edit-user.steps';
import { TitleAtom } from '@/components/UI/atoms/typography/title/title.atom';
import { StepBoxOrganism } from '@/components/UI/organism/step-box/step-box.organism';

export const EditUserStep2Template = () => {
  return (
    <>
      <TitleAtom.Large value={'Editar Usuário'} />
      <div className={'step-wrapper'}>
        <StepBoxOrganism steps={editUserSteps} />
        <EditUserFormOrganism />
      </div>
    </>
  );
};
