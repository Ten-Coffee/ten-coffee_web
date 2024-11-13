'use client';

import './modal.styles.scss';
import { ButtonAtom } from '@/components/UI/atoms/button/button.atom';
import { IconButtonAtom } from '@/components/UI/atoms/icon-button/icon-button.atom';
import { icons } from '@/icons/icons';
import { useEffect } from 'react';

interface ModalOrganismProps {
  title: string;
  isOpen: boolean;
  toggle: () => void;
  description: string;
  mainButton: {
    text: string;
    action: () => void;
  };
}

export const ModalOrganism = ({
  isOpen,
  title,
  toggle,
  description,
  mainButton
}: ModalOrganismProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }

    return () => document.body.classList.remove('no-scroll');
  }, [isOpen]);

  return (
    <>
      {isOpen && (
        <div className={'modal-wrapper'}>
          <div className={'modal-wrapper__modal-container'}>
            <div className={'modal-container__title-area'}>
              <h1 className={'title-area__title'}>{title}</h1>
              <IconButtonAtom
                icon={icons.X}
                hierarchy={'ghosted'}
                size={'medium'}
                onClick={toggle}
              />
            </div>
            <p className={'modal-container__description'}>{description}</p>
            <div className={'modal-container__buttons'}>
              <ButtonAtom.Wrapper onClick={toggle} hierarchy={'outlined'}>
                Cancelar
              </ButtonAtom.Wrapper>
              <ButtonAtom.Wrapper
                onClick={mainButton.action}
                hierarchy={'enabled'}
              >
                {mainButton.text}
              </ButtonAtom.Wrapper>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
