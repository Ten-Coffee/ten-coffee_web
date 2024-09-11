import { ButtonAtom } from '@/components/UI/atoms/button/button.atom';
import { TextFieldMolecule } from '@/components/UI/molecules/text-field/text-field.molecule';

import './representative-form.styles.scss';

export const RepresentativeFormOrganism = () => {
  return (
    <form className="representative-form">
      <div className="representative-form__fields">
        <TextFieldMolecule label="Nome" />
        <TextFieldMolecule label="E-mail" />
        <TextFieldMolecule label="Telefone" />
        <TextFieldMolecule label="CPF" />
        <TextFieldMolecule label="Data de Nascimento" />
      </div>
      <div className="representative-form__buttons">
        <ButtonAtom.Wrapper hierarchy="outlined">Cancelar</ButtonAtom.Wrapper>
        <ButtonAtom.Wrapper hierarchy="enabled">Continuar</ButtonAtom.Wrapper>
      </div>
    </form>
  );
};
