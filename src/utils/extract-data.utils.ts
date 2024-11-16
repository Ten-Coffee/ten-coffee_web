import { labelMapping } from '@/components/templates/(privated)/coffee-shop/components/UI/organism/data-revision-section/utils/LabelMapping';
import { DataItem } from '@/components/templates/(privated)/coffee-shop/components/UI/organism/data-revision/interfaces/data-item.interface';
import {
  formatCEP,
  formatCNPJ,
  formatCPF,
  formatDate,
  formatPhone
} from '@/utils/formatter.utils';

const formatterMapping: Record<string, (value: string) => string> = {
  cpf: formatCPF,
  cnpj: formatCNPJ,
  phone: formatPhone,
  phoneNumber: formatPhone,
  zipCode: formatCEP,
  contractStart: formatDate,
  contractEnd: formatDate
};

export const extractData = (data: Record<string, unknown>): DataItem[] => {
  const keysToExclude = ['userPermissionEnum'];

  return Object.entries(data)
    .filter(
      ([key, value]) =>
        !keysToExclude.includes(key) && value !== undefined && value !== ''
    )
    .map(([key, value]) => {
      const formatter = formatterMapping[key];
      const formattedValue = formatter
        ? formatter(String(value))
        : String(value);

      return {
        label: labelMapping[key] || key,
        value: formattedValue
      };
    });
};
