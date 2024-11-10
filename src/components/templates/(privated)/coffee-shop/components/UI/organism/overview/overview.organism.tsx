import './overview.styles.scss';

import { useOverviewHook } from '@/components/templates/(privated)/coffee-shop/components/UI/organism/overview/use-overview.hook';
import { ReadByIdOrganism } from '@/components/templates/(privated)/coffee-shop/components/UI/organism/read-by-id/read-by-id.organism';

export const OverviewOrganism = () => {
  const { coffeeShop, address } = useOverviewHook();

  return (
    <>
      <div className={'overview-organism'}>
        <ReadByIdOrganism
          title={'Unidade'}
          data={coffeeShop.data}
          isLoading={coffeeShop.isLoading}
        />
        <ReadByIdOrganism
          title={'Endereço'}
          data={address.data}
          isLoading={address.isLoading}
        />
        {/*<ReadByIdOrganism title={'Representante'} />*/}
      </div>
    </>
  );
};
