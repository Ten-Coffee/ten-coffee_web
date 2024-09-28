'use client';

import { useFormStore } from '@/components/templates/(privated)/coffee-shop/create/store/coffee-shop-store';
import { ButtonAtom } from '@/components/UI/atoms/button/button.atom';
import { TextFieldMolecule } from '@/components/UI/molecules/text-field/text-field.molecule';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import './representative-form.styles.scss';

const schema = z.object({
  nome: z.string().min(2, 'Nome inválido'),
  email: z.string().email('E-mail inválido'),
  telefone: z.string().min(10, 'Telefone inválido'),
  cpf: z.string().min(11, 'CPF inválido').max(14, 'CPF inválido'),
  dataNascimento: z.string().refine((date) => {
    const regex = /^\d{4}-\d{2}-\d{2}$/;
    return regex.test(date);
  }, 'Data de Nascimento inválida')
});

type RepresentativeFormProps = z.infer<typeof schema>;

export const RepresentativeFormOrganism = () => {
  const { updateFormData } = useFormStore();
  const router = useRouter();
  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm<RepresentativeFormProps>({
    mode: 'all',
    reValidateMode: 'onChange',
    resolver: zodResolver(schema),
    criteriaMode: 'all'
  });

  const handleForm = (data: RepresentativeFormProps) => {
    updateFormData({ representante: data });
    router.push('/coffee-shop/create/step-4');
  };

  return (
    <form onSubmit={handleSubmit(handleForm)} className={'representative-form'}>
      <div className={'representative-form__fields'}>
        <TextFieldMolecule
          {...register('nome')}
          label={'Nome'}
          error={!!errors.nome}
          helperText={errors.nome?.message}
        />
        <TextFieldMolecule
          {...register('email')}
          label={'E-mail'}
          error={!!errors.email}
          helperText={errors.email?.message}
        />
        <TextFieldMolecule
          {...register('telefone')}
          label={'Telefone'}
          error={!!errors.telefone}
          helperText={errors.telefone?.message}
        />
        <TextFieldMolecule
          {...register('cpf')}
          label={'CPF'}
          error={!!errors.cpf}
          helperText={errors.cpf?.message}
        />
        <TextFieldMolecule
          {...register('dataNascimento')}
          label={'Data de Nascimento'}
          error={!!errors.dataNascimento}
          helperText={errors.dataNascimento?.message}
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
