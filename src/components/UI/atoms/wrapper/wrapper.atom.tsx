'use client';

import { SidebarOrganism } from '@/components/UI/organism/sidebar/sidebar.organism';
import { sidebarStore } from '@/store/sidebar.store';
import { ReactNode } from 'react';
import './wrapper.style.scss';

interface WrapperAtomProps {
  children: ReactNode;
}

export const WrapperAtom = ({ children }: WrapperAtomProps) => {
  const { isOpen } = sidebarStore();
  const wrapperChildrenClass = isOpen
    ? 'wrapper__children-is-open'
    : 'wrapper__children';

  return (
    <main className={'wrapper'}>
      <SidebarOrganism />
      <section className={wrapperChildrenClass}>{children}</section>
    </main>
  );
};
