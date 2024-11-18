import { TableStatusEnum } from '@/enums/table-status.enum';
import { TablesService } from '@/services/tables/tables.service';
import { PathParamsType } from '@/types/path-params.type';
import { ReadByIdType } from '@/types/read-by-id.type';
import { formatTime, tableNumberMask } from '@/utils/mask.utils';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'next/navigation';

export const useTableOverviewHook = () => {
  const { id } = useParams<PathParamsType>();

  const { data, isLoading } = useQuery({
    queryKey: ['table', id],
    queryFn: () => TablesService.findById(id)
  });

  const table: ReadByIdType[] = [
    {
      label: 'Número',
      value: tableNumberMask(data?.number?.toString())
    },
    {
      label: 'Última vez visitada',
      value: formatTime(data?.lastTimeVisited)
    },
    {
      label: 'Contador',
      value: formatTime(data?.counter)
    },
    {
      label: 'Status',
      value: data?.tableStatus,
      tableStatus: data?.tableStatus || TableStatusEnum.FREE
    }
  ];

  return {
    table: {
      data: table,
      isLoading
    }
  };
};
