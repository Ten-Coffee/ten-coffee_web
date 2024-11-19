'use client';

import './edit-coffee-shop-form.styles.scss';

import { useEditCoffeeShopFormHook } from '@/components/templates/(privated)/coffee-shop/components/UI/organism/edit-coffee-shop-form/use-edit-coffee-shop-form.hook';
import { ButtonAtom } from '@/components/UI/atoms/button/button.atom';
import { TextFieldMolecule } from '@/components/UI/molecules/text-field/text-field.molecule';

export const EditCoffeeShopFormOrganism = () => {
  const { form, submitForm, handleCancel } = useEditCoffeeShopFormHook();
  const {
    formState: { errors }
  } = form;

  return (
    <form
      className={'edit-coffee-shop-form'}
      onSubmit={form.handleSubmit(submitForm)}
    >
      <div className={'edit-coffee-shop-form__fields'}>
        <TextFieldMolecule
          label={'Razão Social'}
          {...form.register('name')}
          disabled={true}
          error={!!errors.name}
          helperText={errors.name?.message}
        />
        <TextFieldMolecule
          label={'Nome Fantasia'}
          {...form.register('nameFantasy')}
          error={!!errors.nameFantasy}
          helperText={errors.nameFantasy?.message}
        />
        <TextFieldMolecule
          label={'CNPJ'}
          {...form.register('cnpj')}
          mask={'cnpj'}
          disabled={true}
          error={!!errors.cnpj}
          helperText={errors.cnpj?.message}
        />
        <TextFieldMolecule
          label={'E-mail'}
          {...form.register('email')}
          error={!!errors.email}
          helperText={errors.email?.message}
        />
        <TextFieldMolecule
          label={'Número de Telefone'}
          {...form.register('phoneNumber')}
          mask={'phone'}
          error={!!errors.phoneNumber}
          helperText={errors.phoneNumber?.message}
        />
        <TextFieldMolecule
          label={'Data de Início do Contrato'}
          {...form.register('contractStart')}
          disabled={true}
          type={'date'}
          error={!!errors.contractStart}
          helperText={errors.contractStart?.message}
        />
        <TextFieldMolecule
          label={'Data de Fim do Contrato'}
          {...form.register('contractEnd')}
          disabled={true}
          type={'date'}
          error={!!errors.contractEnd}
          helperText={errors.contractEnd?.message}
        />
      </div>
      <div className={'edit-coffee-shop-form__buttons'}>
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
