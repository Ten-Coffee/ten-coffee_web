'use client';

import { useCredentialFormHook } from './use-credential-form.hook';

import { ButtonAtom } from '@/components/UI/atoms/button/button.atom';
import { TextFieldMolecule } from '@/components/UI/molecules/text-field/text-field.molecule';
import './credential-form.styles.scss';

export const CredentialFormOrganism = () => {
  const { handleBack, handleContinue } = useCredentialFormHook();

  return (
    <form className={'credential-form'}>
      <div className={'credential-form__fields'}>
        <TextFieldMolecule label={'Login'} />
        <TextFieldMolecule label={'Senha'} />
      </div>

      <div className={'credential-form__buttons'}>
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
