'use client';

import { useAddressFormHook } from '@/components/templates/(privated)/coffee-shop/components/UI/organism/address-form/use-address-form.hook';
import { ButtonAtom } from '@/components/UI/atoms/button/button.atom';
import { TextFieldMolecule } from '@/components/UI/molecules/text-field/text-field.molecule';
import './address-form.styles.scss';

export const AddressFormOrganism = () => {
  const { handleSubmit, register, errors, handleForm, handleBack } =
    useAddressFormHook();

  return (
    <form onSubmit={handleSubmit(handleForm)} className={'address-form'}>
      <div className={'address-form__fields'}>
        <TextFieldMolecule
          {...register('zipCode')}
          label={'CEP'}
          placeholder={'99999-999'}
          error={!!errors.zipCode}
          helperText={errors.zipCode?.message}
        />
        <TextFieldMolecule
          {...register('street')}
          label={'Logradouro'}
          placeholder={'Av. Café da Catedral'}
          error={!!errors.street}
          helperText={errors.street?.message}
        />
        <TextFieldMolecule
          {...register('number')}
          label={'Número'}
          placeholder={'999'}
          error={!!errors.number}
          helperText={errors.number?.message}
        />
        <TextFieldMolecule
          {...register('additionalInformation')}
          label={'Complemento'}
          placeholder={'Bloco 1 Ap 1'}
          error={!!errors.additionalInformation}
          helperText={errors.additionalInformation?.message}
        />
        <TextFieldMolecule
          {...register('neighborhood')}
          label={'Bairro'}
          placeholder={'Pq. Resid. Café Claro'}
          error={!!errors.neighborhood}
          helperText={errors.neighborhood?.message}
        />
        <TextFieldMolecule
          {...register('city')}
          label={'Cidade'}
          placeholder={'Vale do Café'}
          error={!!errors.city}
          helperText={errors.city?.message}
        />
        <TextFieldMolecule
          {...register('state')}
          label={'Estado'}
          placeholder={'Café Grosso do Sul'}
          error={!!errors.state}
          helperText={errors.state?.message}
        />
      </div>

      <div className={'address-form__buttons'}>
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
