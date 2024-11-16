import '../styles/user-step.styles.scss';
import { UserDataRevisionOrganism } from '@/components/templates/(privated)/user/components/UI/organism/user-data-revision/user-data-revision.organism';
import { userStepBoxData } from '@/components/templates/(privated)/user/create/data/user-step-box.data';
import { TitleAtom } from '@/components/UI/atoms/typography/title/title.atom';
import { StepBoxOrganism } from '@/components/UI/organism/step-box/step-box.organism';

export const CreateUserStep3Template = () => {
  return (
    <>
      <TitleAtom.Large value={'Cadastrar Credenciais'} />
      <div className={'step-wrapper'}>
        <StepBoxOrganism steps={userStepBoxData} />
        <UserDataRevisionOrganism />
      </div>
    </>
  );
};
