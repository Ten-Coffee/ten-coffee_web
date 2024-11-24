'use client';

import { DetailsViewOrganism } from '@/components/UI/organism/details-view/details-view.organism';
import { PathParamsType } from '@/types/path-params.type';
import { ReadByIdType } from '@/types/read-by-id.type';
import { useParams, useRouter } from 'next/navigation';

interface OverviewOrganismProps {
  address: { data: ReadByIdType[]; isLoading: boolean };
  coffeeShop: { data: ReadByIdType[]; isLoading: boolean };
  representative: { data: ReadByIdType[]; isLoading: boolean };
}

export const OverviewOrganism = ({
  address,
  coffeeShop,
  representative
}: OverviewOrganismProps) => {
  const { id } = useParams<PathParamsType>();
  const router = useRouter();

  const coffeeShopEdit = {
    text: 'Editar',
    onClick: () => router.push(`/coffee-shops/edit/step-2/${id}`)
  };

  const addressEdit = {
    text: 'Editar',
    onClick: () => router.push(`/coffee-shops/edit/step-3/${id}`)
  };

  const representativeEdit = {
    text: 'Editar',
    onClick: () => router.push(`/coffee-shops/edit/step-4/${id}`)
  };

  return (
    <>
      <DetailsViewOrganism
        title={'Unidade'}
        data={coffeeShop?.data}
        isLoading={coffeeShop?.isLoading}
        editButton={coffeeShopEdit}
      />
      <DetailsViewOrganism
        title={'Endereço'}
        data={address?.data}
        isLoading={address?.isLoading}
        editButton={addressEdit}
      />
      <DetailsViewOrganism
        title={'Representante'}
        data={representative?.data}
        isLoading={representative?.isLoading}
        editButton={representativeEdit}
      />
    </>
  );
};
