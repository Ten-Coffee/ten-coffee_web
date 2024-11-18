'use client';

import './table-overview.styles.scss';
import { useTableOverviewHook } from '@/components/templates/(privated)/tables/components/UI/organism/table-overview/use-table-overview.hook';
import { DetailsViewOrganism } from '@/components/UI/organism/details-view/details-view.organism';

export const TableOverviewOrganism = () => {
  const { table } = useTableOverviewHook();

  return (
    <section className={'table-overview'}>
      <DetailsViewOrganism
        isTable={true}
        title={'Visão geral'}
        data={table.data}
        isLoading={table.isLoading}
        isEdit={false}
      />
    </section>
  );
};
