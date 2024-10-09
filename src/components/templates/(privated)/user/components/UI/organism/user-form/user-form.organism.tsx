'use client';

import { ButtonAtom } from '@/components/UI/atoms/button/button.atom';
import { TextFieldMolecule } from '@/components/UI/molecules/text-field/text-field.molecule';
import './user-form.styles.scss';
import { useUserFormHook } from './use-user-form.hook';

export const UserFormOrganism = () => {
  const { handleContinue, handleCancel } = useUserFormHook();

  return (
    <form className={'user-form'}>
      <div className={'user-form__fields'}>
        <TextFieldMolecule label={'Nome'} />
        <TextFieldMolecule label={'Permissão'} />
        <TextFieldMolecule label={'CPF'} />
        <TextFieldMolecule label={'Unidade'} />
        <TextFieldMolecule label={'Email'} />
        <TextFieldMolecule label={'Telefone'} />
      </div>
      <div className={'user-form__buttons'}>
        <ButtonAtom.Wrapper
          hierarchy={'outlined'}
          type={'button'}
          onClick={handleCancel}
        >
          Cancelar
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
