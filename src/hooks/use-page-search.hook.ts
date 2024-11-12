'use client';

import { parseAsInteger, parseAsString, useQueryStates } from 'nuqs';

export const usePageSearchHook = () => {
  return useQueryStates({
    page: parseAsInteger.withDefault(0),
    search: parseAsString.withDefault('')
  });
};
