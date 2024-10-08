'use client';

import { useRepresentativeFormHook } from '@/components/templates/(privated)/coffee-shop/components/UI/organism/representative-form/use-representative-form.hook';
import { ButtonAtom } from '@/components/UI/atoms/button/button.atom';
import { TextFieldMolecule } from '@/components/UI/molecules/text-field/text-field.molecule';
import './representative-form.styles.scss';
import { router } from 'next/client';

export const RepresentativeFormOrganism = () => {
  const { handleSubmit, register, errors, handleForm } =
    useRepresentativeFormHook();

  return (
    <form onSubmit={handleSubmit(handleForm)} className={'representative-form'}>
      <div className={'representative-form__fields'}>
        <TextFieldMolecule
          {...register('name')}
          label={'Nome'}
          placeholder={'Lorem Ipsum'}
          error={!!errors.name}
          helperText={errors.name?.message}
        />
        <TextFieldMolecule
          {...register('representativeEmail')}
          label={'E-mail'}
          placeholder={'lorem-ipsum@mail.com'}
          error={!!errors.representativeEmail}
          helperText={errors.representativeEmail?.message}
        />
        <TextFieldMolecule
          {...register('phone')}
          label={'Telefone'}
          placeholder={'44999999999'}
          error={!!errors.phone}
          helperText={errors.phone?.message}
        />
        <TextFieldMolecule
          {...register('cpf')}
          label={'CPF'}
          placeholder={'00000000000'}
          error={!!errors.cpf}
          helperText={errors.cpf?.message}
        />
        <TextFieldMolecule
          {...register('birthDate')}
          label={'Data de Nascimento'}
          placeholder={'00/00/0000'}
          error={!!errors.birthDate}
          helperText={errors.birthDate?.message}
        />
      </div>

      <div className={'representative-form__buttons'}>
        <ButtonAtom.Wrapper
          hierarchy={'outlined'}
          type={'button'}
          onClick={() => router.back()}
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
