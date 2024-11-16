'use client';

import { useCredentialFormHook } from './use-credential-form.hook';

import { ButtonAtom } from '@/components/UI/atoms/button/button.atom';
import { PasswordTextFieldMolecule } from '@/components/UI/molecules/password-text-field/password-text-field.molecule';
import { TextFieldMolecule } from '@/components/UI/molecules/text-field/text-field.molecule';
import './credential-form.styles.scss';

export const CredentialFormOrganism = () => {
  const { handleBack, handleForm, form } = useCredentialFormHook();
  const {
    formState: { errors }
  } = form;

  return (
    <form
      className={'credential-form'}
      onSubmit={form.handleSubmit(handleForm)}
    >
      <div className={'credential-form__fields'}>
        <TextFieldMolecule
          label={'Login'}
          {...form.register('login')}
          disabled={true}
          error={!!errors.login}
          helperText={errors.login?.message}
        />
        <PasswordTextFieldMolecule
          label={'Password'}
          {...form.register('password')}
          error={!!errors.password}
          helperText={errors.password?.message}
        />
      </div>

      <div className={'credential-form__buttons'}>
        <ButtonAtom.Wrapper
          hierarchy={'outlined'}
          type={'button'}
          onClick={handleBack}
        >
          Voltar
        </ButtonAtom.Wrapper>

        <ButtonAtom.Wrapper hierarchy={'enabled'} type={'submit'}>
          Continuar
        </ButtonAtom.Wrapper>
      </div>
    </form>
  );
};
