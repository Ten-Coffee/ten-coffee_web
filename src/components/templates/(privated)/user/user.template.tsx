'use client';

import './user.styles.scss';

import { useUserListHook } from './use-users.hook';

import { ButtonAtom } from '@/components/UI/atoms/button/button.atom';
import { TitleAtom } from '@/components/UI/atoms/typography/title/title.atom';
import { InputMolecule } from '@/components/UI/molecules/input/input.molecule';
import { TableOrganism } from '@/components/UI/organism/table/table.organism';
import { icons } from '@/icons/icons';

export const UserTemplate = () => {
  const { handleAdicionar, columns, usuarios, rowActions } = useUserListHook();

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

      <InputMolecule.Text
        icon={icons.Search}
        position={'left'}
        placeholder={'Pesquisar usuário por nome'}
      />

      <TableOrganism
        columns={columns}
        data={usuarios}
        rowActions={rowActions}
        number={0}
      />
    </>
  );
};
