import { UseAddTablesModalHook } from '@/components/templates/(privated)/tables/hooks/use-add-tables-modal.hook';

export const useTablesHook = () => {
  const { modal, form } = UseAddTablesModalHook();

  return {
    modal,
    form
  };
};
