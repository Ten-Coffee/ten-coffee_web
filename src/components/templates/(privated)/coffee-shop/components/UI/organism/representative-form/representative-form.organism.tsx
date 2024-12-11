import { useRepresentativeFormHook } from '@/components/templates/(privated)/coffee-shop/components/UI/organism/representative-form/use-representative-form.hook';
import { ButtonAtom } from '@/components/UI/atoms/button/button.atom';
import { PasswordFieldMolecule } from '@/components/UI/molecules/password-field/password-field.molecule';
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
          {...register('login')}
          label={'E-mail'}
          placeholder={'lorem-ipsum@mail.com'}
          error={!!errors.login}
          helperText={errors.login?.message}
        />
        <TextFieldMolecule
          {...register('phone')}
          label={'Telefone'}
          placeholder={'(44) 9 9999-9999'}
          mask={'phone'}
          error={!!errors.phone}
          helperText={errors.phone?.message}
        />
        <TextFieldMolecule
          {...register('cpf')}
          label={'CPF'}
          placeholder={'000.000.000-00'}
          error={!!errors.cpf}
          helperText={errors.cpf?.message}
          mask={'cpf'}
        />
        <PasswordFieldMolecule
          {...register('password')}
          label={'Password'}
          error={!!errors.password}
          helperText={errors.password?.message}
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
