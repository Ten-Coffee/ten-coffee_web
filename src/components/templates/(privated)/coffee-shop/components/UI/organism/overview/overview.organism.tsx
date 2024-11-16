import './overview.styles.scss';

import { useOverviewHook } from '@/components/templates/(privated)/coffee-shop/components/UI/organism/overview/use-overview.hook';
import { DetailsViewOrganism } from '@/components/UI/organism/details-view/details-view.organism';

export const OverviewOrganism = () => {
  const { coffeeShop, address } = useOverviewHook();

  return (
    <>
      <div className={'overview-organism'}>
        <DetailsViewOrganism
          title={'Unidade'}
          data={coffeeShop.data}
          isLoading={coffeeShop.isLoading}
        />
        <DetailsViewOrganism
          title={'Endereço'}
          data={address.data}
          isLoading={address.isLoading}
        />
        {/*<ReadByIdOrganism title={'Representante'} />*/}
      </div>
    </>
  );
};
