import {
  formatCEP,
  formatCNPJ,
  formatCPF,
  formatDate,
  formatPhone
} from './formatters.utils';

import { labelMapping } from '@/components/templates/(privated)/coffee-shop/components/UI/organism/data-revision-section/utils/LabelMapping';
import { DataItem } from '@/components/templates/(privated)/coffee-shop/components/UI/organism/data-revision/interfaces/data-item.interface';

export const extractData = (data: Record<string, unknown>): DataItem[] => {
  return Object.entries(data)
    .filter(
      ([key]) =>
        key !== 'userPermissionEnum' &&
        key !== 'password' &&
        data[key] !== undefined &&
        data[key] !== ''
    )
    .map(([key, value]) => {
      let formattedValue = String(value);

      if (key === 'cpf') formattedValue = formatCPF(formattedValue);
      if (key === 'cnpj') formattedValue = formatCNPJ(formattedValue);
      if (key === 'phone' || key === 'phoneNumber')
        formattedValue = formatPhone(formattedValue);
      if (key === 'zipCode') formattedValue = formatCEP(formattedValue);
      if (key === 'contractStart' || key === 'contractEnd') {
        formattedValue = formatDate(formattedValue);
      }

      return {
        label: labelMapping[key] || key,
        value: formattedValue
      };
    });
};
