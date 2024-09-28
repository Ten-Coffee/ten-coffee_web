import create from 'zustand';

export type CoffeeShopFormData = {
  unidade: {
    razaoSocial: string;
    nomeFantasia: string;
    cnpj: string;
    email: string;
    telefone1: string;
    telefone2: string;
    periodoContrato: string;
  };
  endereco: {
    cep: string;
    logradouro: string;
    numero: string;
    complemento?: string;
    bairro: string;
    cidade: string;
    estado: string;
  };
  representante: {
    nome: string;
    email: string;
    telefone: string;
    cpf: string;
    dataNascimento: string;
  };
};

type FormStore = {
  formData: CoffeeShopFormData;
  updateFormData: (data: Partial<CoffeeShopFormData>) => void;
};

export const useFormStore = create<FormStore>((set) => ({
  formData: {
    unidade: {
      razaoSocial: '',
      nomeFantasia: '',
      cnpj: '',
      email: '',
      telefone1: '',
      telefone2: '',
      periodoContrato: ''
    },
    endereco: {
      cep: '',
      logradouro: '',
      numero: '',
      complemento: '',
      bairro: '',
      cidade: '',
      estado: ''
    },
    representante: {
      nome: '',
      email: '',
      telefone: '',
      cpf: '',
      dataNascimento: ''
    }
  },
  updateFormData: (data) =>
    set((state) => ({
      formData: { ...state.formData, ...data }
    }))
}));
