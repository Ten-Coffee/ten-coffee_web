'use client';

import { useReadIngredientByIdHook } from '@/components/templates/(privated)/ingredients/read/use-read-ingredient-by-id.hook';
import { ButtonAtom } from '@/components/UI/atoms/button/button.atom';
import { IconButtonAtom } from '@/components/UI/atoms/icon-button/icon-button.atom';
import { TitleAtom } from '@/components/UI/atoms/typography/title/title.atom';
import { DetailsViewOrganism } from '@/components/UI/organism/details-view/details-view.organism';
import { ModalOrganism } from '@/components/UI/organism/modal/modal.organism';
import { icons } from '@/icons/icons';

export const ReadIngredientByIdTemplate = () => {
  const { ingredient, title, modal, goBackPage, data } =
    useReadIngredientByIdHook();

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
        title={'Ingrediente'}
        data={ingredient.data}
        isLoading={ingredient.isLoading}
      />

      <ModalOrganism {...modal} />
    </>
  );
};
