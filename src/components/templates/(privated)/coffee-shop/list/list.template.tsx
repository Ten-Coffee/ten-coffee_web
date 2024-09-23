import { CoffeeShopListOrganism } from '../components/UI/organism/coffee-shop-list/coffee-shop-list.organism';
import '../list/styles/wrapper.styles.scss';

import { TitleAtom } from '@/components/UI/atoms/typography/title/title.atom';

export default function ListTemplate() {
  return (
    <>
      <TitleAtom.Large value={'Lista de Unidades'} />
      <div className={'strep-wrapper'}>
        <CoffeeShopListOrganism />
      </div>
    </>
  );
}
