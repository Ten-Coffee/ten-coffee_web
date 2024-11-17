'use client';

import { useCoffeeShopReadByIdHook } from '@/components/templates/(privated)/coffee-shop/read/use-coffee-shop-read-by-id.hook';
import { useReadUserByIdHook } from '@/components/templates/(privated)/user/read/use-read-user-by-id.hook';
import { ButtonAtom } from '@/components/UI/atoms/button/button.atom';
import { IconButtonAtom } from '@/components/UI/atoms/icon-button/icon-button.atom';
import { TitleAtom } from '@/components/UI/atoms/typography/title/title.atom';
import { DetailsViewOrganism } from '@/components/UI/organism/details-view/details-view.organism';
import { ModalOrganism } from '@/components/UI/organism/modal/modal.organism';
import { icons } from '@/icons/icons';

export const ReadUserByIdTemplate = () => {
  const { goBackPage } = useCoffeeShopReadByIdHook();
  const { data, isLoading, modal, userData } = useReadUserByIdHook();

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
          <TitleAtom.Large value={data[0].value ?? 'Carregando...'} />
        </div>
        <ButtonAtom.Wrapper
          hierarchy={'outlined'}
          onClick={() => modal.onClickModal(userData!)}
          type={'submit'}
        >
          <ButtonAtom.Icon icon={icons.Trash} />
          Inativar Usuário
        </ButtonAtom.Wrapper>
      </div>

      <DetailsViewOrganism
        title={'Usuário'}
        data={data}
        isLoading={isLoading}
      />

      <ModalOrganism {...modal} />
    </>
  );
};
