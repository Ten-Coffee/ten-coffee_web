'use client';

import { useReadItemMenuByIdHook } from '@/components/templates/(privated)/menuItem/read/use-read-item-menu-by-id.hook';
import { ButtonAtom } from '@/components/UI/atoms/button/button.atom';
import { IconButtonAtom } from '@/components/UI/atoms/icon-button/icon-button.atom';
import { TitleAtom } from '@/components/UI/atoms/typography/title/title.atom';
import { DetailsViewOrganism } from '@/components/UI/organism/details-view/details-view.organism';
import { ModalOrganism } from '@/components/UI/organism/modal/modal.organism';
import { icons } from '@/icons/icons';

export const ReadItemMenuByIdTemplate = () => {
  const { goBackPage, menuItem, ingredientsItem, data, title, modal } =
    useReadItemMenuByIdHook();

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
          <TitleAtom.Large value={title} />
        </div>
        <ButtonAtom.Wrapper
          hierarchy={'outlined'}
          onClick={() => modal.onClickModal(data!)}
          type={'submit'}
        >
          <ButtonAtom.Icon icon={icons.Trash} />
          Inativar Item
        </ButtonAtom.Wrapper>
      </div>

      <DetailsViewOrganism
        title={'Item'}
        data={menuItem.data}
        isLoading={menuItem.isLoading}
      />
      <DetailsViewOrganism
        title={'Ingredientes'}
        data={ingredientsItem.data}
        isLoading={menuItem.isLoading}
      />
      <ModalOrganism {...modal} />
    </>
  );
};
