import { UserOverviewOrganism } from '@/components/templates/(privated)/coffee-shop/components/UI/organism/user-overview/user-overview.organism';
import { editUserSteps } from '@/components/templates/(privated)/user/edit/steps/edit-user.steps';
import { TitleAtom } from '@/components/UI/atoms/typography/title/title.atom';
import { StepBoxOrganism } from '@/components/UI/organism/step-box/step-box.organism';

export const EditUserStep1Template = () => {
  return (
    <>
      <TitleAtom.Large value={'Cadastrar Credenciais'} />
      <div className={'step-wrapper'}>
        <StepBoxOrganism steps={editUserSteps} />
        <UserOverviewOrganism />
      </div>
    </>
  );
};
