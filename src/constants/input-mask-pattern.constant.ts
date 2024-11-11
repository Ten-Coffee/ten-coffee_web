import { MaskType } from '@/type/input-mask.type';

export const MASK_PATTERN: Record<MaskType, string> = {
  cnpj: '99.999.999/9999-99',
  cpf: '999.999.999-99',
  cep: '99999-999',
  phone: '(99) 9 9999-9999'
};
