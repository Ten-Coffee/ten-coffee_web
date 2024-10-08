'use client';

import { labelMapping } from '@/components/templates/(privated)/coffee-shop/components/UI/organism/data-revision-section/utils/LabelMapping';
import { DataRevisionOrganism } from '@/components/templates/(privated)/coffee-shop/components/UI/organism/data-revision/data-revision.organism';
import { DataItem } from '@/components/templates/(privated)/coffee-shop/components/UI/organism/data-revision/interfaces/data-item.interface';
import { useFormStore } from '@/components/templates/(privated)/coffee-shop/create/store/coffee-shop-store';
import { ButtonAtom } from '@/components/UI/atoms/button/button.atom';
import { DiviserAtom } from '@/components/UI/atoms/diviser/diviser.atom';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import './data-revision-section.styles.scss';

export const DataRevisionSectionOrganism = () => {
  const router = useRouter();
  const { formData } = useFormStore();

  const { coffeeShop, address, representative } = formData;

  const mutation = useMutation({
    mutationFn: async () => {
      const response = await fetch('https://seu-backend.com/api/cadastrar', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (!response.ok) {
        throw new Error('Erro ao cadastrar');
      }
      return response.json();
    },
    onSuccess: () => {
      router.push('/coffee-shop/');
    },
    onError: (error) => {
      console.error('Erro ao cadastrar:', error);
    }
  });

  const handleBack = () => {
    router.back();
  };

  const handleCreate = () => {
    mutation.mutate();
  };

  return (
    <div className={'data-revision-section'}>
      <div className={'data-revision-section__fields-section'}>
        <DataRevisionOrganism
          title={'Cafeteria'}
          data={extractData(coffeeShop)}
        />
        <DiviserAtom />
        <DataRevisionOrganism title={'Endereço'} data={extractData(address)} />
        <DiviserAtom />
        <DataRevisionOrganism
          title={'Representante'}
          data={extractData(representative)}
        />
      </div>

      <div className={'data-revision-section__buttons'}>
        <ButtonAtom.Wrapper
          hierarchy={'outlined'}
          type={'button'}
          onClick={handleBack}
        >
          Voltar
        </ButtonAtom.Wrapper>
        <ButtonAtom.Wrapper
          hierarchy={'enabled'}
          type={'button'}
          onClick={handleCreate}
        >
          Cadastrar
        </ButtonAtom.Wrapper>
      </div>

      {mutation.isError && (
        <div className="error-message">Erro ao cadastrar. Tente novamente.</div>
      )}
    </div>
  );
};

const extractData = (data: Record<string, unknown>): DataItem[] => {
  return Object.entries(data)
    .filter(([, value]) => value !== undefined && value !== '')
    .map(([key, value]) => {
      return {
        label: labelMapping[key] || key,
        value: String(value)
      };
    });
};
