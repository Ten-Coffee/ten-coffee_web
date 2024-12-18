'use client';

import './styles/wrapper.styles.scss';
import { useCoffeeShopListHook } from '@/components/templates/(privated)/coffee-shop/use-coffee-shop.hook';
import { ButtonAtom } from '@/components/UI/atoms/button/button.atom';
import { TitleAtom } from '@/components/UI/atoms/typography/title/title.atom';
import { InputMolecule } from '@/components/UI/molecules/input/input.molecule';
import { ToastMolecule } from '@/components/UI/molecules/toast/toast.molecule';
import { ModalOrganism } from '@/components/UI/organism/modal/modal.organism';
import { TableOrganism } from '@/components/UI/organism/table/table.organism';
import { icons } from '@/icons/icons';

export const CoffeeShopTemplate = () => {
  const {
    handleAdicionar,
    columns,
    coffeeShopsData,
    rowActions,
    setPageSearch,
    search,
    modal
  } = useCoffeeShopListHook();

  return (
    <>
      <div className={'coffee-shop-header'}>
        <TitleAtom.Large value={'Unidades'} />

        <ButtonAtom.Wrapper
          hierarchy={'outlined'}
          type={'button'}
          onClick={handleAdicionar}
        >
          <ButtonAtom.Icon icon={icons.Add} />
          Adicionar unidade
        </ButtonAtom.Wrapper>
      </div>

      <InputMolecule.Text
        icon={icons.Search}
        position={'left'}
        placeholder={'Pesquisar unidade por nome ou por CNPJ'}
        onChange={(e) => setPageSearch({ search: e.target.value })}
        value={search}
      />

      <TableOrganism
        columns={columns}
        data={coffeeShopsData?.content}
        rowActions={rowActions}
        totalPages={coffeeShopsData?.totalPages}
        number={coffeeShopsData?.number ?? 0}
      />

      <ModalOrganism {...modal} />
      <ToastMolecule title={'Teste'} description={'FOi'} status={'error'} />
    </>
  );
};
