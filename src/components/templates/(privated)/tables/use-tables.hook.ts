import { UseAddTablesModalHook } from '@/components/templates/(privated)/tables/hooks/use-add-tables-modal.hook';
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

  const { data } = useQuery({
    queryFn: () => TablesService.findAll(activeStatuses),
    queryKey: ['all-tables', activeStatuses]
  });

  return {
    modal,
    form,
    data,
    counter: data?.length
  };
};
