'use client';

import './styles/wrapper.styles.scss';
import { TitleAtom } from '@/components/UI/atoms/typography/title/title.atom';
import { CoffeeShopListOrganism } from './components/UI/organism/coffee-shop-list/coffee-shop-list.organism';
import { ButtonAtom } from '@/components/UI/atoms/button/button.atom';
import { useRouter } from 'next/navigation';

export const useCoffeeShopListHook = () => {
  const router = useRouter();

  const navigateTo = (path: string) => {
    router.push(path);
  };

  const handleAdicionar = () => {
    navigateTo('/coffee-shop/create/step-1');
  };

  return {
    handleAdicionar
  };
};

export default function ListTemplate() {
  const { handleAdicionar } = useCoffeeShopListHook();
  return (
    <>
      <div className={'coffee-shop-header'}>
        <TitleAtom.Large value={'Unidades'} />

        <ButtonAtom.Wrapper
          hierarchy={'outlined'}
          type={'button'}
          onClick={handleAdicionar}
        >
          + Adicionar unidade
        </ButtonAtom.Wrapper>
      </div>

      <div className={'step-wrapper'}>
        <CoffeeShopListOrganism />
      </div>
    </>
  );
}
