import { ButtonAtom } from '@/components/UI/atoms/button/button.atom';
import { TextFieldMolecule } from '@/components/UI/molecules/text-field/text-field.molecule';

import './address-form.styles.scss';

export const AddressFormOrganism = () => {
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
        <ButtonAtom.Wrapper hierarchy="outlined">Cancelar</ButtonAtom.Wrapper>
        <ButtonAtom.Wrapper hierarchy="enabled">Continuar</ButtonAtom.Wrapper>
      </div>
    </form>
  );
};
