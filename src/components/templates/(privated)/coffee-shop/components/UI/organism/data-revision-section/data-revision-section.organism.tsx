'use client';

import { DataRevisionOrganism } from '@/components/templates/(privated)/coffee-shop/components/UI/organism/data-revision/data-revision.organism';
import {
  CoffeeShopFormData,
  useFormStore
} from '@/components/templates/(privated)/coffee-shop/create/store/coffee-shop-store';
import { ButtonAtom } from '@/components/UI/atoms/button/button.atom';
import { DiviserAtom } from '@/components/UI/atoms/diviser/diviser.atom';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import './data-revision-section.styles.scss';

const api = axios.create({
  baseURL: 'https://seu-backend.com/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
});

export const DataRevisionSectionOrganism = () => {
  const router = useRouter();
  const { formData } = useFormStore();

  const { unidade, endereco, representante } = extractData(formData);

  const mutation = useMutation({
    mutationFn: async () => {
      return await api.post('/cadastrar', formData);
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
        <DataRevisionOrganism title={'Cafeteria'} data={unidade} />
        <DiviserAtom />
        <DataRevisionOrganism title={'Endereço'} data={endereco} />
        <DiviserAtom />
        <DataRevisionOrganism title={'Representante'} data={representante} />
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

const extractData = (formData: CoffeeShopFormData) => {
  return {
    unidade: [
      { label: 'Razão Social', value: formData.unidade.razaoSocial },
      { label: 'Nome Fantasia', value: formData.unidade.nomeFantasia },
      { label: 'CNPJ', value: formData.unidade.cnpj },
      { label: 'E-mail', value: formData.unidade.email },
      { label: 'Telefone 1', value: formData.unidade.telefone1 },
      { label: 'Telefone 2', value: formData.unidade.telefone2 },
      { label: 'Período do Contrato', value: formData.unidade.periodoContrato }
    ],
    endereco: [
      { label: 'CEP', value: formData.endereco.cep },
      { label: 'Logradouro', value: formData.endereco.logradouro },
      { label: 'Número', value: formData.endereco.numero },
      { label: 'Complemento', value: formData.endereco.complemento },
      { label: 'Bairro', value: formData.endereco.bairro },
      { label: 'Cidade', value: formData.endereco.cidade },
      { label: 'Estado', value: formData.endereco.estado }
    ],
    representante: [
      { label: 'Nome', value: formData.representante.nome },
      { label: 'E-mail', value: formData.representante.email },
      { label: 'Telefone', value: formData.representante.telefone },
      { label: 'CPF', value: formData.representante.cpf },
      {
        label: 'Data de Nascimento',
        value: formData.representante.dataNascimento
      }
    ]
  };
};
