import { UseAddTablesModalHook } from '@/components/templates/(privated)/tables/hooks/use-add-tables-modal.hook';
import { FIND_ALL_TABLES_KEY } from '@/components/templates/(privated)/tables/keys/all-tables.key';
import { useTableStatusFilterHook } from '@/hooks/use-table-status-filter.hook';
import { TablesService } from '@/services/tables/tables.service';
import { useQuery } from '@tanstack/react-query';

export const useTablesHook = () => {
  const { modal, form } = UseAddTablesModalHook();
  const [{ FREE, OCCUPIED, RESERVED, NO_SERVICE }] = useTableStatusFilterHook();

  const activeStatuses = Object.entries({
    FREE,
    OCCUPIED,
    RESERVED,
    NO_SERVICE
  })
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    .filter(([_, value]) => value)
    .map(([key]) => key)
    .join(', ');

  const { data, isLoading } = useQuery({
    queryFn: () => TablesService.findAll(activeStatuses),
    queryKey: [FIND_ALL_TABLES_KEY, activeStatuses]
  });

  return {
    modal,
    form,
    data,
    counter: data?.length,
    isLoading
  };
};
