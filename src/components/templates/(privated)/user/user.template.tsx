'use client';

import './user.styles.scss';

import { useUserListHook } from './use-users.hook';

import { UserDataTableOrganism } from '@/components/templates/(privated)/user/components/UI/organism/user-data-table/user-data-table.organism';
import { ButtonAtom } from '@/components/UI/atoms/button/button.atom';
import { TitleAtom } from '@/components/UI/atoms/typography/title/title.atom';
import { icons } from '@/icons/icons';

export const UserTemplate = () => {
  const { handleAdicionar } = useUserListHook();

  return (
    <>
      <div className={'user-header'}>
        <TitleAtom.Large value={'Usuários'} />

        <ButtonAtom.Wrapper
          hierarchy={'outlined'}
          type={'button'}
          onClick={handleAdicionar}
        >
          <ButtonAtom.Icon icon={icons.Add} />
          Adicionar usuario
        </ButtonAtom.Wrapper>
      </div>

      <UserDataTableOrganism />
    </>
  );
};
