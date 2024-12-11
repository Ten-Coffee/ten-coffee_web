import {
  getTableStatusLabel,
  TableStatusEnum
} from '@/enums/table-status.enum';
import { MenuItemService } from '@/services/menu-item/menu-item.service';
import { OrdersService } from '@/services/orders/orders.service';
import { TablesService } from '@/services/tables/tables.service';
import { PathParamsType } from '@/types/path-params.type';
import { ReadByIdType } from '@/types/read-by-id.type';
import { useQuery } from '@tanstack/react-query';
import { useParams, useRouter } from 'next/navigation';

const READ_BY_ID_QUERY = 'read-by-id-table';
const READ_ORDERS_QUERY = 'read-orders-by-table';
const READ_MENU_ITEM_QUERY = 'read-menu-item';

export const useReadByIdTableHook = () => {
  const { id } = useParams<PathParamsType>();
  const router = useRouter();

  const { data: tableData, isLoading: isTableLoading } = useQuery({
    queryKey: [READ_BY_ID_QUERY],
    queryFn: () => TablesService.findById(id),
    enabled: !!id
  });

  const { data: ordersData, isLoading: isOrdersLoading } = useQuery({
    queryKey: [READ_ORDERS_QUERY],
    queryFn: () => OrdersService.findByTableId(id),
    enabled: !!id
  });

  const { data: menuItemDetails, isLoading: isMenuItemsLoading } = useQuery({
    queryKey: [READ_MENU_ITEM_QUERY],
    queryFn: async () => {
      if (ordersData) {
        const itemDetailsPromises = ordersData.flatMap((order) =>
          order.orderItems.map((item) =>
            MenuItemService.findById(item.menuItemId)
          )
        );
        return Promise.all(itemDetailsPromises);
      }
      return [];
    },
    enabled: !!ordersData
  });

  const tableDetails: ReadByIdType[] = [
    {
      label: 'Número',
      value: '#' + tableData?.number
    },
    {
      label: 'Última Visita',
      value: tableData?.lastTimeVisited
    },
    {
      label: 'Contador',
      value: tableData?.counter
    },
    {
      label: 'Status',
      value:
        getTableStatusLabel[tableData?.tableStatus as TableStatusEnum] ||
        'Desconhecido'
    }
  ];

  const enrichedOrders =
    ordersData?.map((order) => ({
      ...order,
      orderItems: order.orderItems.map((item) => ({
        ...item,
        details: menuItemDetails?.find(
          (menuItem) => menuItem.id === Number(item.menuItemId)
        )
      }))
    })) || [];

  return {
    goBackPage: () => router.back(),
    table: {
      data: tableDetails,
      isLoading: isTableLoading
    },
    orders: {
      data: enrichedOrders,
      isLoading: isOrdersLoading || isMenuItemsLoading
    },
    title: 'Mesa ' + (tableData?.number ?? 'Carregando...')
  };
};
