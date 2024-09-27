'use client';

import './styles/wrapper.styles.scss';
import { TitleAtom } from '@/components/UI/atoms/typography/title/title.atom';
import { ButtonAtom } from '@/components/UI/atoms/button/button.atom';
import { useRouter } from 'next/navigation';
import { icons } from '@/icons/icons';
import { TableOrganism } from '@/components/UI/organism/table/table.organism';
import { columns } from '@/components/UI/organism/table/mock-data/columns.mock-data';
import { empresas } from '@/components/UI/organism/table/mock-data/table.mock-data.';
import { TextFieldMolecule } from '@/components/UI/molecules/text-field/text-field.molecule';

export const useCoffeeShopListHook = () => {
  const router = useRouter();

  const handleAdicionar = () => {
    router.push('/coffee-shop/create/step-1');
  };

  return {
    handleAdicionar
  };
};

export const CoffeeShopTemplate = () => {
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
          <ButtonAtom.Icon icon={icons.Add} />
          Adicionar unidade
        </ButtonAtom.Wrapper>
      </div>
      <div>
        <TextFieldMolecule
          label=""
          icon={icons.Search}
          position="left"
          labelSize="medium"
          placeholder="Pesquisar unidade por nome ou por CNPJ"
        />
      </div>
      <TableOrganism columns={columns} data={empresas} />
    </>
  );
};
