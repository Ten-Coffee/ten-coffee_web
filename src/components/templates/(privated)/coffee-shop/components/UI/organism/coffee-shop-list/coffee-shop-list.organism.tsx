'use client';

import './coffee-shop-list.organism.scss';
import { TableOrganism } from '@/components/UI/organism/table/table.organism';
import { columns } from '@/components/UI/organism/table/mock-data/columns.mock-data';
import { empresas } from '@/components/UI/organism/table/mock-data/table.mock-data.';

export const CoffeeShopListOrganism = () => {
  return (
    <form className={'coffee-shop-list'}>
      <div className={'coffee-shop-form__item'}>
        <TableOrganism columns={columns} data={empresas} />
      </div>
    </form>
  );
};
