import { ButtonAtom } from '@/components/UI/atoms/button/button.atom';
import { TextFieldMolecule } from '@/components/UI/molecules/text-field/text-field.molecule';

import './address-form.styles.scss';
import { useAddressForm } from '@/components/templates/(privated)/coffee-shop/components/UI/organism/address-form/use-address-form.hook';

export const AddressFormOrganism = () => {
  const { navigateTo } = useAddressForm();

  const handleBack = () => {
    navigateTo('/coffee-shop/create/step-1');
  };

  const handleContinue = () => {
    navigateTo('/coffee-shop/create/step-3');
  };
  return (
    <form className="address-form">
      <div className="address-form__fields">
        <TextFieldMolecule label="CEP" />
        <TextFieldMolecule label="Logradouro" />
        <TextFieldMolecule label="Número" />
        <TextFieldMolecule label="Complemento" />
        <TextFieldMolecule label="Bairro" />
        <TextFieldMolecule label="Cidade" />
        <TextFieldMolecule label="Estado" />
      </div>
      <div className="address-form__buttons">
        <ButtonAtom.Wrapper
          hierarchy="outlined"
          type={'button'}
          onClick={handleBack}
        >
          Voltar
        </ButtonAtom.Wrapper>
        <ButtonAtom.Wrapper
          hierarchy="enabled"
          type={'button'}
          onClick={handleContinue}
        >
          Continuar
        </ButtonAtom.Wrapper>
      </div>
    </form>
  );
};
