'use client';

import { useCoffeeShopFormHook } from '@/components/templates/(privated)/coffee-shop/components/UI/organism/coffee-shop-form/use-coffee-shop-form.hook';
import { ButtonAtom } from '@/components/UI/atoms/button/button.atom';
import { TextFieldMolecule } from '@/components/UI/molecules/text-field/text-field.molecule';
import './coffee-shop-form.styles.scss';

export const CoffeeShopFormOrganism = () => {
  const { handleContinue, handleCancel } = useCoffeeShopFormHook();

  return (
    <form className={'coffee-shop-form'}>
      <div className={'coffee-shop-form__fields'}>
        <TextFieldMolecule label={'Razão Social'} />
        <TextFieldMolecule label={'Nome Fantasia'} />
        <TextFieldMolecule label={'CNPJ'} />
        <TextFieldMolecule label={'Email'} />
        <TextFieldMolecule label={'Telefone 1'} />
        <TextFieldMolecule label={'Telefone 2'} />
        <TextFieldMolecule label={'Período Contrato'} />
      </div>
      <div className={'coffee-shop-form__buttons'}>
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
