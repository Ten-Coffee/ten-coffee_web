'use client';

import { ReadByIdOrganism } from '@/components/templates/(privated)/coffee-shop/components/UI/organism/read-by-id/read-by-id.organism';
import { ButtonAtom } from '@/components/UI/atoms/button/button.atom';
import { IconButtonAtom } from '@/components/UI/atoms/icon-button/icon-button.atom';
import { TitleAtom } from '@/components/UI/atoms/typography/title/title.atom';
import { icons } from '@/icons/icons';

import './read-by-id.styles.scss';

export default function ReadByIdTemplate() {
  return (
    <>
      <div className={'read-by-id'}>
        <div className={'read-by-id__header'}>
          <div className={'read-by-id__header__row'}>
            <IconButtonAtom
              icon={icons.Chevron.Left}
              hierarchy={'ghosted'}
              size={'large'}
            />
            <TitleAtom.Large value={'teste'} />
          </div>
          <ButtonAtom.Wrapper hierarchy={'outlined'} type={'submit'}>
            <ButtonAtom.Icon icon={icons.Trash}></ButtonAtom.Icon>
            Inativar Unidade
          </ButtonAtom.Wrapper>
        </div>
        <div className={'read-by-id__organism'}>
          <ReadByIdOrganism title={'Unidade'} />
          <ReadByIdOrganism title={'Endereço'} />
          <ReadByIdOrganism title={'Representante'} />
        </div>
      </div>
    </>
  );
}
