'use client';

import { useEditPasswordFormHook } from '@/components/templates/(privated)/user/components/UI/organism/edit-password-form/use-edit-password-form.hook';
import { ButtonAtom } from '@/components/UI/atoms/button/button.atom';
import './edit-password-form.styles.scss';
import { PasswordTextFieldMolecule } from '@/components/UI/molecules/password-text-field/password-text-field.molecule';
import { TextFieldMolecule } from '@/components/UI/molecules/text-field/text-field.molecule';

export const EditPasswordFormOrganism = () => {
  const { form, handleCancel, submitForm } = useEditPasswordFormHook();
  const {
    formState: { errors }
  } = form;

  return (
    <form
      className={'edit-password-form'}
      onSubmit={form.handleSubmit(submitForm)}
    >
      <div className={'edit-password-form__fields'}>
        <TextFieldMolecule
          label={'Login'}
          {...form.register('login')}
          error={!!errors.login}
          helperText={errors.login?.message}
          disabled
        />
        <PasswordTextFieldMolecule
          label={'Senha'}
          {...form.register('password')}
          error={!!errors.password}
          helperText={errors.password?.message}
        />
      </div>
      <div className={'edit-password-form__buttons'}>
        <ButtonAtom.Wrapper
          hierarchy={'outlined'}
          type={'button'}
          onClick={handleCancel}
        >
          Cancelar
        </ButtonAtom.Wrapper>
        <ButtonAtom.Wrapper hierarchy={'enabled'} type={'submit'}>
          Editar
        </ButtonAtom.Wrapper>
      </div>
    </form>
  );
};
