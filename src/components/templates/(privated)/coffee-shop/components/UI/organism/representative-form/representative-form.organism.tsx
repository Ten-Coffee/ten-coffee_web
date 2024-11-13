import { useRepresentativeFormHook } from '@/components/templates/(privated)/coffee-shop/components/UI/organism/representative-form/use-representative-form.hook';
import { ButtonAtom } from '@/components/UI/atoms/button/button.atom';
import { PasswordTextFieldMolecule } from '@/components/UI/molecules/password-text-field/password-text-field.molecule';
import { TextFieldMolecule } from '@/components/UI/molecules/text-field/text-field.molecule';
import './representative-form.styles.scss';

export const RepresentativeFormOrganism = () => {
  const { handleSubmit, register, errors, handleForm, handleBack } =
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
          {...register('email')}
          label={'Email'}
          placeholder={'loremipsum@gmail.com'}
          error={!!errors.email}
          helperText={errors.email?.message}
        />

        <PasswordTextFieldMolecule
          {...register('password')}
          label={'Senha do Usuário'}
          error={!!errors.password}
          helperText={errors.password?.message}
        />
        <TextFieldMolecule
          {...register('phone')}
          label={'Telefone'}
          placeholder={'(44)99999-9999'}
          error={!!errors.phone}
          helperText={errors.phone?.message}
          mask={'phone'}
        />
        <TextFieldMolecule
          {...register('cpf')}
          label={'CPF'}
          placeholder={'000.000.000-00'}
          error={!!errors.cpf}
          helperText={errors.cpf?.message}
          mask={'cpf'}
        />
      </div>

      <div className={'representative-form__buttons'}>
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
