'use client';

import { useCoffeeShopFormHook } from '@/components/templates/(privated)/coffee-shop/components/UI/organism/coffee-shop-form/use-coffee-shop-form.hook';
import { useFormStore } from '@/components/templates/(privated)/coffee-shop/create/store/coffee-shop-store';
import { ButtonAtom } from '@/components/UI/atoms/button/button.atom';
import { TextFieldMolecule } from '@/components/UI/molecules/text-field/text-field.molecule';
import { isValidCNPJ } from '@brazilian-utils/brazilian-utils';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import './coffee-shop-form.styles.scss';
import { z } from 'zod';

const schema = z.object({
  razaoSocial: z.string(),
  nomeFantasia: z.string(),
  cnpj: z
    .string()
    .transform((value) => value.replace(/\D/g, ''))
    .refine(isValidCNPJ, 'CNPJ inválido'),
  email: z.string().email('E-mail inválido'),
  telefone1: z.string(),
  telefone2: z.string(),
  periodoContrato: z.string()
});

type FormProps = z.infer<typeof schema>;

export const CoffeeShopFormOrganism = () => {
  const { handleCancel } = useCoffeeShopFormHook();
  const { updateFormData } = useFormStore();
  const router = useRouter();
  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm<FormProps>({
    mode: 'all',
    reValidateMode: 'onChange',
    resolver: zodResolver(schema),
    criteriaMode: 'all'
  });

  const handleForm = (data: FormProps) => {
    updateFormData({ unidade: data });
    console.log(
      'Dados atualizados no store:',
      useFormStore.getState().formData.unidade
    );

    router.push('/coffee-shop/create/step-2');
  };

  return (
    <form onSubmit={handleSubmit(handleForm)} className={'coffee-shop-form'}>
      <div className={'coffee-shop-form__fields'}>
        <TextFieldMolecule
          {...register('razaoSocial')}
          label={'Razão Social'}
        />
        <TextFieldMolecule
          {...register('nomeFantasia')}
          label={'Nome Fantasia'}
        />
        <TextFieldMolecule
          {...register('cnpj')}
          label={'CNPJ'}
          error={!!errors.cnpj}
          helperText={errors.cnpj?.message}
        />
        <TextFieldMolecule
          {...register('email')}
          label={'Email'}
          error={!!errors.email}
          helperText={errors.email?.message}
        />
        <TextFieldMolecule {...register('telefone1')} label={'Telefone 1'} />
        <TextFieldMolecule {...register('telefone2')} label={'Telefone 2'} />
        <TextFieldMolecule
          {...register('periodoContrato')}
          label={'Período Contrato'}
        />
      </div>
      <div className={'coffee-shop-form__buttons'}>
        <ButtonAtom.Wrapper
          hierarchy={'outlined'}
          type={'button'}
          onClick={handleCancel}
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
