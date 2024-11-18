'use client';

import { useEditAddressFormHook } from '@/components/templates/(privated)/coffee-shop/components/UI/organism/edit-address-form/use-edit-address-form.hook';
import { ButtonAtom } from '@/components/UI/atoms/button/button.atom';
import { SelectFieldMolecule } from '@/components/UI/molecules/select-field/select-field.molecule';
import { TextFieldMolecule } from '@/components/UI/molecules/text-field/text-field.molecule';
import '../address-form/address-form.styles.scss';
import { getUFArray } from '@/enums/uf.enum';
import { Controller } from 'react-hook-form';

export const EditAddressFormOrganism = () => {
  const { form, submitForm, handleCancel } = useEditAddressFormHook();

  return (
    <form onSubmit={form.handleSubmit(submitForm)} className={'address-form'}>
      <div className={'address-form__fields'}>
        <TextFieldMolecule
          {...form.register('zipCode')}
          label={'CEP'}
          mask={'cep'}
          placeholder={'99999-999'}
          error={!!form.formState.errors.zipCode}
          helperText={form.formState.errors.zipCode?.message}
        />
        <TextFieldMolecule
          {...form.register('street')}
          label={'Logradouro'}
          placeholder={'Av.'}
          error={!!form.formState.errors.street}
          helperText={form.formState.errors.street?.message}
        />
        <TextFieldMolecule
          {...form.register('number')}
          label={'Número'}
          placeholder={'01'}
          error={!!form.formState.errors.number}
          helperText={form.formState.errors.number?.message}
        />
        <TextFieldMolecule
          {...form.register('additionalInformation')}
          label={'Complemento'}
          placeholder={'Apto | Casa A'}
          error={!!form.formState.errors.additionalInformation}
          helperText={form.formState.errors.additionalInformation?.message}
        />
        <TextFieldMolecule
          {...form.register('neighborhood')}
          label={'Bairro'}
          placeholder={'Bairro'}
          error={!!form.formState.errors.neighborhood}
          helperText={form.formState.errors.neighborhood?.message}
        />
        <TextFieldMolecule
          {...form.register('city')}
          label={'Cidade'}
          placeholder={'Maringá'}
          error={!!form.formState.errors.city}
          helperText={form.formState.errors.city?.message}
        />

        <Controller
          control={form.control}
          name="state"
          render={({ field }) => (
            <SelectFieldMolecule
              {...field}
              value={field.value}
              onChange={field.onChange}
              options={getUFArray}
              label={'Estado'}
              placeholder={'PR'}
              error={!!form.formState.errors.state}
              helperText={form.formState.errors.state?.message}
            />
          )}
        />
      </div>

      <div className={'address-form__buttons'}>
        <ButtonAtom.Wrapper
          hierarchy={'outlined'}
          type={'button'}
          onClick={handleCancel}
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
