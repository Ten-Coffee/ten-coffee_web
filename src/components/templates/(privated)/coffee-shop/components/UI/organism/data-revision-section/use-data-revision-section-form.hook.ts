'use client';

import { labelMapping } from '@/components/templates/(privated)/coffee-shop/components/UI/organism/data-revision-section/utils/LabelMapping';
import { DataItem } from '@/components/templates/(privated)/coffee-shop/components/UI/organism/data-revision/interfaces/data-item.interface';
import { useFormStore } from '@/components/templates/(privated)/coffee-shop/create/store/coffee-shop-store';
import { useRouter } from 'next/navigation';

export const useDataRevisionFormHook = () => {
  const router = useRouter();
  const { formData } = useFormStore();

  const { coffeeShop, address, representative } = formData;

  const handleBack = () => {
    router.back();
  };

  const handleCreate = () => {};

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

  return {
    coffeeShop: extractData(coffeeShop),
    address: extractData(address),
    representative: extractData(representative),
    handleBack,
    handleCreate
  };
};
