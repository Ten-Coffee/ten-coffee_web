'use client';

import { DataRevisionOrganism } from '@/components/templates/(privated)/coffee-shop/components/UI/organism/data-revision/data-revision.organism';
import { useUserDataRevisionHook } from '@/components/templates/(privated)/user/components/UI/organism/user-data-revision/use-user-data-revision.hook';
import { ButtonAtom } from '@/components/UI/atoms/button/button.atom';
import { DiviserAtom } from '@/components/UI/atoms/diviser/diviser.atom';

export const UserDataRevisionOrganism = () => {
  const { handleBack, user, credentials, createUser } =
    useUserDataRevisionHook();

  return (
    <div className={'data-revision-section'}>
      <div className={'data-revision-section__fields-section'}>
        <DataRevisionOrganism title={'Usuário'} data={user} />
        <DiviserAtom />
        <DataRevisionOrganism title={'Credenciais'} data={credentials} />
      </div>

      <div className={'data-revision-section__buttons'}>
        <ButtonAtom.Wrapper
          hierarchy={'outlined'}
          type={'button'}
          onClick={handleBack}
        >
          Voltar
        </ButtonAtom.Wrapper>
        <ButtonAtom.Wrapper
          hierarchy={'enabled'}
          type={'button'}
          onClick={createUser}
        >
          Cadastrar
        </ButtonAtom.Wrapper>
      </div>
    </div>
  );
};
