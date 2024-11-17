import { ViaCepResponseInterface } from '@/interfaces/via-cep-response.interface';

const resourceUrl = (cep: string) => `https://viacep.com.br/ws/${cep}/json/`;

const find = async (cep: string): Promise<ViaCepResponseInterface> => {
  const response = await fetch(resourceUrl(cep));

  return await response.json();
};

export const ViaCepService = {
  find
};
