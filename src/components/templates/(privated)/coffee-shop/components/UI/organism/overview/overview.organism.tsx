'use client';

import './overview.styles.scss';

import { useOverviewHook } from '@/components/templates/(privated)/coffee-shop/components/UI/organism/overview/use-overview.hook';
import { DetailsViewOrganism } from '@/components/UI/organism/details-view/details-view.organism';
import { PathParamsType } from '@/types/path-params.type';
import { useParams, useRouter } from 'next/navigation';

export const OverviewOrganism = () => {
  const { id } = useParams<PathParamsType>();
  const { coffeeShop, address } = useOverviewHook();
  const router = useRouter();

  const coffeeShopEdit = {
    text: 'Editar',
    onClick: () => router.push(`/coffee-shops/edit/step-2/${id}`)
  };

  const addressEdit = {
    text: 'Editar',
    onClick: () => router.push(`/coffee-shops/edit/step-3/${id}`)
  };

  return (
    <>
      <div className={'overview-organism'}>
        <DetailsViewOrganism
          title={'Unidade'}
          data={coffeeShop.data}
          isLoading={coffeeShop.isLoading}
          editButton={coffeeShopEdit}
        />
        <DetailsViewOrganism
          title={'Endereço'}
          data={address.data}
          isLoading={address.isLoading}
          editButton={addressEdit}
        />
      </div>
    </>
  );
};
