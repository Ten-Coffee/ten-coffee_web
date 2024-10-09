import { TitleAtom } from '@/components/UI/atoms/typography/title/title.atom';
import { StepBoxOrganism } from '@/components/UI/organism/step-box/step-box.organism';
import { userStepBoxData } from '../data/users-step-box.data';
import { UserFormOrganism } from '../../components/UI/organism/user-form/user-form.organism';

export default function UserStep1Template() {
  return (
    <>
      <TitleAtom.Large value={'Cadastrar Usuário'} />
      <div className={'step-wrapper'}>
        <StepBoxOrganism steps={userStepBoxData} />
        <UserFormOrganism />
      </div>
    </>
  );
}
