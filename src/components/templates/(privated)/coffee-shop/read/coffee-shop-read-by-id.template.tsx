'use client';

import { OverviewOrganism } from '@/components/templates/(privated)/coffee-shop/components/UI/organism/overview/overview.organism';
import { useCoffeeShopReadByIdHook } from '@/components/templates/(privated)/coffee-shop/read/use-coffee-shop-read-by-id.hook';
import { UserDataTableOrganism } from '@/components/templates/(privated)/user/components/UI/organism/user-data-table/user-data-table.organism';
import { ButtonAtom } from '@/components/UI/atoms/button/button.atom';
import { IconButtonAtom } from '@/components/UI/atoms/icon-button/icon-button.atom';
import { TitleAtom } from '@/components/UI/atoms/typography/title/title.atom';
import { TabGroupMolecule } from '@/components/UI/molecules/tab-group/tab-group.molecule';
import { ModalOrganism } from '@/components/UI/organism/modal/modal.organism';
import { icons } from '@/icons/icons';
import { getActionVerb } from '@/utils/get-action-verb.utils';

export default function CoffeeShopReadByIdTemplate() {
  const {
    goBackPage,
    modal,
    address,
    coffeeShop,
    coffeeShopData,
    representative
  } = useCoffeeShopReadByIdHook();

  const tabs = [
    {
      name: 'Visão Geral',
      value: 'overview',
      children: (
        <OverviewOrganism
          address={address}
          coffeeShop={coffeeShop}
          representative={representative}
        />
      )
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
          <TitleAtom.Large value={coffeeShopData?.name || 'Cafeteria'} />
        </div>
        <ButtonAtom.Wrapper
          hierarchy={'outlined'}
          onClick={() => coffeeShopData && modal.onClickModal(coffeeShopData)}
          type={'submit'}
        >
          <ButtonAtom.Icon icon={icons.Trash}></ButtonAtom.Icon>
          {getActionVerb(coffeeShopData?.status)} Unidade
        </ButtonAtom.Wrapper>
      </div>

      <TabGroupMolecule tabs={tabs} />

      <ModalOrganism {...modal} />
    </>
  );
}
