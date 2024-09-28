'use client';

import { useFormStore } from '@/components/templates/(privated)/coffee-shop/create/store/coffee-shop-store';
import { ButtonAtom } from '@/components/UI/atoms/button/button.atom';
import { TextFieldMolecule } from '@/components/UI/molecules/text-field/text-field.molecule';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import './address-form.styles.scss';

const schema = z.object({
  cep: z.string().min(8, 'CEP inválido'),
  logradouro: z.string(),
  numero: z.string(),
  complemento: z.string().optional(),
  bairro: z.string(),
  cidade: z.string(),
  estado: z.string().min(2, 'Estado inválido')
});

type AddressFormProps = z.infer<typeof schema>;

export const AddressFormOrganism = () => {
  const { updateFormData } = useFormStore();
  const router = useRouter();
  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm<AddressFormProps>({
    mode: 'all',
    reValidateMode: 'onChange',
    resolver: zodResolver(schema),
    criteriaMode: 'all'
  });

  const handleForm = (data: AddressFormProps) => {
    updateFormData({ endereco: data });
    console.log(
      'Dados de endereço atualizados no store:',
      useFormStore.getState().formData.endereco
    );
    router.push('/coffee-shop/create/step-3');
  };

  return (
    <form onSubmit={handleSubmit(handleForm)} className={'address-form'}>
      <div className={'address-form__fields'}>
        <TextFieldMolecule
          {...register('cep')}
          label={'CEP'}
          error={!!errors.cep}
          helperText={errors.cep?.message}
        />
        <TextFieldMolecule
          {...register('logradouro')}
          label={'Logradouro'}
          error={!!errors.logradouro}
          helperText={errors.logradouro?.message}
        />
        <TextFieldMolecule
          {...register('numero')}
          label={'Número'}
          error={!!errors.numero}
          helperText={errors.numero?.message}
        />
        <TextFieldMolecule
          {...register('complemento')}
          label={'Complemento'}
          error={!!errors.complemento}
          helperText={errors.complemento?.message}
        />
        <TextFieldMolecule
          {...register('bairro')}
          label={'Bairro'}
          error={!!errors.bairro}
          helperText={errors.bairro?.message}
        />
        <TextFieldMolecule
          {...register('cidade')}
          label={'Cidade'}
          error={!!errors.cidade}
          helperText={errors.cidade?.message}
        />
        <TextFieldMolecule
          {...register('estado')}
          label={'Estado'}
          error={!!errors.estado}
          helperText={errors.estado?.message}
        />
      </div>

      <div className={'address-form__buttons'}>
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
