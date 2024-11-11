'use client';

import { ReadByIdOrganism } from '@/components/templates/(privated)/coffee-shop/components/UI/organism/read-by-id/read-by-id.organism';
import { useCoffeeShopReadByIdHook } from '@/components/templates/(privated)/coffee-shop/read/use-coffee-shop-read-by-id.hook';
import { ButtonAtom } from '@/components/UI/atoms/button/button.atom';
import { IconButtonAtom } from '@/components/UI/atoms/icon-button/icon-button.atom';
import { TitleAtom } from '@/components/UI/atoms/typography/title/title.atom';
import { icons } from '@/icons/icons';
import './coffee-shop-read-by-id.styles.scss';

export default function CoffeeShopReadByIdTemplate() {
  const { goBackPage, coffeeShop, address } = useCoffeeShopReadByIdHook();

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
          <TitleAtom.Large value={'teste'} />
        </div>
        <ButtonAtom.Wrapper hierarchy={'outlined'} type={'submit'}>
          <ButtonAtom.Icon icon={icons.Trash}></ButtonAtom.Icon>
          Inativar Unidade
        </ButtonAtom.Wrapper>
      </div>
      <div className={'read-by-id__organism'}>
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
}
