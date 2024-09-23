'use client';

import './coffee-shop-list.organism.scss';
import { ButtonAtom } from '@/components/UI/atoms/button/button.atom';
import { useCoffeeShopListHook } from './use-coffee-shop-list.hook';

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
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident
          eum adipisci dicta, ratione illum tenetur distinctio cumque. Officiis
          reprehenderit, sunt qui voluptatum quis totam saepe aliquid quibusdam
          praesentium voluptates provident.
        </p>
      </div>
    </form>
  );
};
