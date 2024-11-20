'use client';

import { useReadIngredientByIdHook } from '@/components/templates/(privated)/ingredients/read/use-read-ingredient-by-id.hook';
import { IconButtonAtom } from '@/components/UI/atoms/icon-button/icon-button.atom';
import { TitleAtom } from '@/components/UI/atoms/typography/title/title.atom';
import { DetailsViewOrganism } from '@/components/UI/organism/details-view/details-view.organism';
import { icons } from '@/icons/icons';

export const ReadIngredientByIdTemplate = () => {
  const { goBackPage, ingredient, editButton } = useReadIngredientByIdHook();

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
          <TitleAtom.Large
            value={
              // ingredient[0].value ??
              'Carregando...'
            }
          />
        </div>
        {/*<ButtonAtom.Wrapper*/}
        {/*  hierarchy={'outlined'}*/}
        {/*  onClick={() => modal.onClickModal(userData!)}*/}
        {/*  type={'submit'}*/}
        {/*>*/}
        {/*  <ButtonAtom.Icon icon={icons.Trash} />*/}
        {/*  Inativar Usuário*/}
        {/*</ButtonAtom.Wrapper>*/}
      </div>

      <DetailsViewOrganism
        editButton={editButton}
        title={'Ingrediente'}
        data={ingredient.dataToShow}
        isLoading={ingredient.isLoading}
      />

      {/*<ModalOrganism {...modal} />*/}
    </>
  );
};
