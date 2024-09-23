'use client';

import './coffee-shop-list.organism.scss';
import { ButtonAtom } from '@/components/UI/atoms/button/button.atom';
import { useCoffeeShopListHook } from './use-coffee-shop-list.hook';
import { TableOrganism } from '@/components/UI/organism/table/table.organism';

export const CoffeeShopListOrganism = () => {
  const { handleAdicionar } = useCoffeeShopListHook();

  return (
    <form className={'coffee-shop-list'}>
      <div className={'coffee-shop-form__buttons'}>
        <ButtonAtom.Wrapper
          hierarchy={'outlined'}
          type={'button'}
          onClick={handleAdicionar}
        >
          Adicionar
        </ButtonAtom.Wrapper>
      </div>

      <div className={'coffee-shop-form__item'}>
      <div>
          <TableOrganism/>
      </div>
      </div>
    </form>
  );
};
