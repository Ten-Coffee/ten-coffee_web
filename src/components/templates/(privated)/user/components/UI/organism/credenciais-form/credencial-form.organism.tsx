'use client';

import { ButtonAtom } from '@/components/UI/atoms/button/button.atom';
import { TextFieldMolecule } from '@/components/UI/molecules/text-field/text-field.molecule';
import './credencial-form.styles.scss';
import { useCredencialFormHook } from './use-credencial-form.hook';


export const CredencialFormOrganism = () => {
    const { handleBack, handleContinue } = useCredencialFormHook();

    return (
        <form className={'credencial-form'}>
            <div className={'credencial-form__fields'}>
                <TextFieldMolecule label={'Login'} />
                <TextFieldMolecule label={'Senha'} />
            </div>

            <div className={'credencial-form__buttons'}>
                <ButtonAtom.Wrapper
                    hierarchy={'outlined'}
                    type={'button'}
                    onClick={handleBack}
                >
                    Voltar
                </ButtonAtom.Wrapper>

                <ButtonAtom.Wrapper
                    hierarchy={'enabled'}
                    type={'button'}
                    onClick={handleContinue}
                >
                    Continuar
                </ButtonAtom.Wrapper>
            </div>
        </form>
    );
};
