import '../styles/user-step.styles.scss';


import { userStepBoxData } from '../data/users-step-box.data';

import { TitleAtom } from '@/components/UI/atoms/typography/title/title.atom';
import { StepBoxOrganism } from '@/components/UI/organism/step-box/step-box.organism';
import { CredencialFormOrganism } from '../../components/UI/organism/credenciais-form/credencial-form.organism';

export const CreateUserStep2Template = () => {
    return (
        <>
            <TitleAtom.Large value={'Cadastrar Credenciais'} />
            <div className={'step-wrapper'}>
                <StepBoxOrganism steps={userStepBoxData} />
                <CredencialFormOrganism />
            </div>
        </>
    );
};
