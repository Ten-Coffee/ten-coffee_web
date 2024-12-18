'use client';

import { useAddressFormHook } from '@/components/templates/(privated)/coffee-shop/components/UI/organism/address-form/use-address-form.hook';
import { ButtonAtom } from '@/components/UI/atoms/button/button.atom';
import { SelectFieldMolecule } from '@/components/UI/molecules/select-field/select-field.molecule';
import { TextFieldMolecule } from '@/components/UI/molecules/text-field/text-field.molecule';
import './address-form.styles.scss';
import { getUFArray } from '@/enums/uf.enum';
import { Controller } from 'react-hook-form';

export const AddressFormOrganism = () => {
  const { handleSubmit, register, errors, handleForm, handleBack, control } =
    useAddressFormHook();

  return (
    <form onSubmit={handleSubmit(handleForm)} className={'address-form'}>
      <div className={'address-form__fields'}>
        <TextFieldMolecule
          {...register('zipCode')}
          label={'CEP'}
          mask={'cep'}
          placeholder={'99999-999'}
          error={!!errors.zipCode}
          helperText={errors.zipCode?.message}
        />
        <TextFieldMolecule
          {...register('street')}
          label={'Logradouro'}
          placeholder={'Av.'}
          error={!!errors.street}
          helperText={errors.street?.message}
        />
        <TextFieldMolecule
          {...register('number')}
          label={'Número'}
          placeholder={'01'}
          error={!!errors.number}
          helperText={errors.number?.message}
        />
        <TextFieldMolecule
          {...register('additionalInformation')}
          label={'Complemento'}
          placeholder={'Apto | Casa A'}
          error={!!errors.additionalInformation}
          helperText={errors.additionalInformation?.message}
        />
        <TextFieldMolecule
          {...register('neighborhood')}
          label={'Bairro'}
          placeholder={'Bairro'}
          error={!!errors.neighborhood}
          helperText={errors.neighborhood?.message}
        />
        <TextFieldMolecule
          {...register('city')}
          label={'Cidade'}
          placeholder={'Maringá'}
          error={!!errors.city}
          helperText={errors.city?.message}
        />

        <Controller
          control={control}
          name="state"
          render={({ field }) => (
            <SelectFieldMolecule
              {...field}
              value={field.value}
              onChange={field.onChange}
              options={getUFArray}
              label={'Estado'}
              placeholder={'PR'}
              error={!!errors.state}
              helperText={errors.state?.message}
            />
          )}
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
