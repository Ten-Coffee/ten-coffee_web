'use client';

import { useReadByIdTableHook } from '@/components/templates/(privated)/tables/read/use-read-by-id-table.hook';
import { IconButtonAtom } from '@/components/UI/atoms/icon-button/icon-button.atom';
import { LabelAtom } from '@/components/UI/atoms/typography/label/label.atom';
import { TitleAtom } from '@/components/UI/atoms/typography/title/title.atom';
import { OrderItemMolecule } from '@/components/UI/molecules/order-item/order-item.molecule';
import { DetailsViewOrganism } from '@/components/UI/organism/details-view/details-view.organism';
import { icons } from '@/icons/icons';

export const ReadByIdTableTemplate = () => {
  const { goBackPage, table, orders, title } = useReadByIdTableHook();

  const totalTablePrice = orders.data?.[0]?.orderItems.reduce(
    (acc, item) => acc + (item.details?.price || 0) * item.quantity,
    0
  );

  return (
    <>
      <div className="read-by-id__header">
        <div className="read-by-id__header__row">
          <IconButtonAtom
            onClick={goBackPage}
            icon={icons.Chevron.Left}
            hierarchy="ghosted"
            size="large"
          />
          <TitleAtom.Large value={title} />
        </div>
      </div>

      <DetailsViewOrganism
        title="Mesa"
        data={table.data}
        isLoading={table.isLoading}
      />

      <TitleAtom.Large value="Pedido" />

      {!orders.isLoading &&
        orders.data?.[0]?.orderItems.map((item, index) => (
          <OrderItemMolecule
            key={item.menuItemId}
            image={item.details?.image || 'default-image.jpg'}
            name={item.details?.name || 'Item desconhecido'}
            quantity={item.quantity}
            price={item.details?.price || 0}
            orderNumber={index + 1}
            status={item.orderItemStatus}
          />
        ))}

      {!orders.isLoading && totalTablePrice !== undefined && (
        <div className="table-total">
          <LabelAtom
            value={`Total do Pedido: R$ ${totalTablePrice.toFixed(2)}`}
            size="large"
          />
        </div>
      )}
    </>
  );
};
