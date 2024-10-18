import '../styles/user-step.styles.scss';

import { CredentialFormOrganism } from '@/components/templates/(privated)/user/components/UI/organism/credentials-form/credential-form.organism';
import { userStepBoxData } from '@/components/templates/(privated)/user/create/data/user-step-box.data';
import { TitleAtom } from '@/components/UI/atoms/typography/title/title.atom';
import { StepBoxOrganism } from '@/components/UI/organism/step-box/step-box.organism';

export const CreateUserStep2Template = () => {
  return (
    <>
      <TitleAtom.Large value={'Cadastrar Credenciais'} />
      <div className={'step-wrapper'}>
        <StepBoxOrganism steps={userStepBoxData} />
        <CredentialFormOrganism />
      </div>
    </>
  );
};
