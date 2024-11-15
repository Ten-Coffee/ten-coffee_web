'use client';

import { OverviewOrganism } from '@/components/templates/(privated)/coffee-shop/components/UI/organism/overview/overview.organism';
import { useCoffeeShopReadByIdHook } from '@/components/templates/(privated)/coffee-shop/read/use-coffee-shop-read-by-id.hook';
import { UserDataTableOrganism } from '@/components/templates/(privated)/user/components/UI/organism/user-data-table/user-data-table.organism';
import { ButtonAtom } from '@/components/UI/atoms/button/button.atom';
import { IconButtonAtom } from '@/components/UI/atoms/icon-button/icon-button.atom';
import { TitleAtom } from '@/components/UI/atoms/typography/title/title.atom';
import { TabGroupMolecule } from '@/components/UI/molecules/tab-group/tab-group.molecule';
import { icons } from '@/icons/icons';
import './coffee-shop-read-by-id.styles.scss';

export default function CoffeeShopReadByIdTemplate() {
  const { goBackPage } = useCoffeeShopReadByIdHook();

  const tabs = [
    {
      name: 'Visão Geral',
      value: 'overview',
      children: <OverviewOrganism />
    },
    {
      name: 'Usuários',
      value: 'users',
      children: <UserDataTableOrganism />
    }
  ];

  return (
    <>
      <div className={'read-by-id__header'}>
        <div className={'read-by-id__header__row'}>
          <IconButtonAtom
            onClick={goBackPage}
            icon={icons.Chevron.Left}
            hierarchy={'ghosted'}
            size={'large'}
          />
          <TitleAtom.Large value={'Cafeteria'} />
        </div>
        <ButtonAtom.Wrapper hierarchy={'outlined'} type={'submit'}>
          <ButtonAtom.Icon icon={icons.Trash}></ButtonAtom.Icon>
          Inativar Unidade
        </ButtonAtom.Wrapper>
      </div>

      <TabGroupMolecule tabs={tabs} />
    </>
  );
}
