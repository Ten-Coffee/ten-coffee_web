'use client';

import { useCoffeeShopFormHook } from '@/components/templates/(privated)/coffee-shop/components/UI/organism/coffee-shop-form/use-coffee-shop-form.hook';
import { ButtonAtom } from '@/components/UI/atoms/button/button.atom';
import { TextFieldMolecule } from '@/components/UI/molecules/text-field/text-field.molecule';
import './coffee-shop-form.styles.scss';

export const CoffeeShopFormOrganism = () => {
  const { handleSubmit, register, errors, handleForm, handleBack } =
    useCoffeeShopFormHook();

  return (
    <form onSubmit={handleSubmit(handleForm)} className={'coffee-shop-form'}>
      <div className={'coffee-shop-form__fields'}>
        <TextFieldMolecule
          {...register('nameFantasy')}
          label={'Nome Fantasia'}
          placeholder={'Lorem Ipsum'}
          error={!!errors.nameFantasy}
          helperText={errors.nameFantasy?.message}
        />
        <TextFieldMolecule
          {...register('name')}
          label={'Razão Social'}
          placeholder={'Lorem Ipsum'}
          error={!!errors.name}
          helperText={errors.name?.message}
        />
        <TextFieldMolecule
          {...register('cnpj')}
          label={'CNPJ'}
          placeholder={'00.000.000/0001-00'}
          error={!!errors.cnpj}
          helperText={errors.cnpj?.message}
        />
        <TextFieldMolecule
          {...register('email')}
          label={'Email'}
          placeholder={'lorem-ipsum@mail.com'}
          error={!!errors.email}
          helperText={errors.email?.message}
        />
        <TextFieldMolecule
          {...register('phoneNumber')}
          label={'Telefone'}
          placeholder={'44999999999'}
          error={!!errors.phoneNumber}
          helperText={errors.phoneNumber?.message}
        />
        <TextFieldMolecule
          {...register('contractStart')}
          label={'Data de Início do Contrato'}
          placeholder={'00/00/0000'}
          error={!!errors.contractStart}
          helperText={errors.contractStart?.message}
        />
        <TextFieldMolecule
          {...register('contractEnd')}
          label={'Data de Fim do Contrato'}
          placeholder={'00/00/0000'}
          error={!!errors.contractEnd}
          helperText={errors.contractEnd?.message}
        />
      </div>

      <div className={'coffee-shop-form__buttons'}>
        <ButtonAtom.Wrapper
          hierarchy={'outlined'}
          type={'button'}
          onClick={handleBack}
        >
          Cancelar
        </ButtonAtom.Wrapper>
        <ButtonAtom.Wrapper hierarchy={'enabled'} type={'submit'}>
          Continuar
        </ButtonAtom.Wrapper>
      </div>
    </form>
  );
};
