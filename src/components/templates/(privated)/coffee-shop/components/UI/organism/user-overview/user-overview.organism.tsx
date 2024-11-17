'use client';

import { DataRevisionOrganism } from '@/components/templates/(privated)/coffee-shop/components/UI/organism/data-revision/data-revision.organism';
import { useUserOverviewHook } from '@/components/templates/(privated)/coffee-shop/components/UI/organism/user-overview/use-user-overview.hook';
import { DiviserAtom } from '@/components/UI/atoms/diviser/diviser.atom';
import { PathParamsType } from '@/types/path-params.type';
import { useParams, useRouter } from 'next/navigation';

export const UserOverviewOrganism = () => {
  const { id } = useParams<PathParamsType>();
  const { userData, credentialData } = useUserOverviewHook();
  const router = useRouter();

  const userEdit = {
    text: 'Editar',
    onClick: () => router.push(`/users/edit/step-2/${id}`)
  };

  const credentialEdit = {
    text: 'Alterar senha',
    onClick: () => router.push(`/users/edit/step-3/${id}`)
  };

  return (
    <div className={'data-revision-section__fields-section'}>
      <DataRevisionOrganism
        title={'Usuário'}
        isLoading={userData.isLoading}
        data={userData.data}
        editButton={userEdit}
      />
      <DiviserAtom />
      <DataRevisionOrganism
        title={'Credenciais'}
        isLoading={credentialData.isLoading}
        data={credentialData.data}
        editButton={credentialEdit}
      />
    </div>
  );
};
