'use client';

import { ButtonAtom } from '@/components/UI/atoms/button/button.atom';
import { IconButtonAtom } from '@/components/UI/atoms/icon-button/icon-button.atom';
import { LabelAtom } from '@/components/UI/atoms/typography/label/label.atom';
import { InputMolecule } from '@/components/UI/molecules/input/input.molecule';
import { StepBoxOrganism } from '@/components/UI/organism/step-box/step-box.organism';
import { TableOrganism } from '@/components/UI/organism/table/table.organism';
import { icons } from '@/icons/icons';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import './page.style.scss';

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      <ButtonAtom.Wrapper
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        hierarchy={'enabled'}
      >
        <LabelAtom value={'Trocar tema'} />
        <ButtonAtom.Icon icon={icons.Add} />
      </ButtonAtom.Wrapper>

      <div className={'form-input-wrapper'}>
        <InputMolecule.Password placeholder={'Digite sua senha'} />
        <InputMolecule.Text icon={icons.Add} position={'left'} />
        <InputMolecule.Text icon={icons.Add} position={'right'} />
        <InputMolecule.Text />
        <InputMolecule.Password />
        <InputMolecule.Password />
        <InputMolecule.Password />
        <InputMolecule.Password />
      </div>

      <IconButtonAtom size={'large'} icon={icons.Add} hierarchy={'variation'} />

      {/*<InputAtom.Text />*/}

      <StepBoxOrganism />

      <TableOrganism />
    </>
  );
}
