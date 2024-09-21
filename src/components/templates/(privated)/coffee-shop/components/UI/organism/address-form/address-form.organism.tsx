'use client';

import { useAddressFormHook } from '@/components/templates/(privated)/coffee-shop/components/UI/organism/address-form/use-address-form.hook';
import { ButtonAtom } from '@/components/UI/atoms/button/button.atom';
import { TextFieldMolecule } from '@/components/UI/molecules/text-field/text-field.molecule';
import './address-form.styles.scss';

export const AddressFormOrganism = () => {
  const { handleBack, handleContinue } = useAddressFormHook();

  return (
    <form className={'address-form'}>
      <div className={'address-form__fields'}>
        <TextFieldMolecule label={'CEP'} />
        <TextFieldMolecule label={'Logradouro'} />
        <TextFieldMolecule label={'Número'} />
        <TextFieldMolecule label={'Complemento'} />
        <TextFieldMolecule label={'Bairro'} />
        <TextFieldMolecule label={'Cidade'} />
        <TextFieldMolecule label={'Estado'} />
      </div>

      <div className={'address-form__buttons'}>
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
