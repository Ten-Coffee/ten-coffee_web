import { UserFormOrganism } from '../../components/UI/organism/user-form/user-form.organism';

import { userStepBoxData } from '@/components/templates/(privated)/user/create/data/user-step-box.data';
import { TitleAtom } from '@/components/UI/atoms/typography/title/title.atom';
import { StepBoxOrganism } from '@/components/UI/organism/step-box/step-box.organism';

export const CreateUserStep1Template = () => {
  return (
    <>
      <TitleAtom.Large value={'Cadastrar Usuário'} />
      <div className={'step-wrapper'}>
        <StepBoxOrganism steps={userStepBoxData} />
        <UserFormOrganism />
      </div>
    </>
  );
};
