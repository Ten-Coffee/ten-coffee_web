import { parseAsString, useQueryState } from 'nuqs';

export const useTabsHook = (defaultValue?: string) => {
  return useQueryState('tabs', parseAsString.withDefault(defaultValue || ''));
};
