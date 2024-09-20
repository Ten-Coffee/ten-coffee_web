'use client';

import useWrapperHook from '@/components/UI/atoms/wrapper/use-wrapper.hook';
import { SidebarOrganism } from '@/components/UI/organism/sidebar/sidebar.organism';
import { ReactNode } from 'react';
import './wrapper.style.scss';

interface WrapperAtomProps {
  children: ReactNode;
}

export const WrapperAtom = ({ children }: WrapperAtomProps) => {
  const { wrapperChildrenClass } = useWrapperHook();

  return (
    <main className={'wrapper'}>
      <SidebarOrganism />
      <section className={wrapperChildrenClass}>{children}</section>
    </main>
  );
};
