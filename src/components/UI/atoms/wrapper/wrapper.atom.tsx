'use client';

import { useWrapperHook } from '@/components/UI/atoms/wrapper/use-wrapper.hook';
import { SidebarWrapperOrganism } from '@/components/UI/organism/sidebar-wrapper/sidebar-wrapper.organism';
import { ReactNode, Suspense } from 'react';
import './wrapper.style.scss';

interface WrapperAtomProps {
  children: ReactNode;
}

export const WrapperAtom = ({ children }: WrapperAtomProps) => {
  const { wrapperChildrenClass } = useWrapperHook();

  return (
    <Suspense>
      <main className={'wrapper'}>
        <SidebarWrapperOrganism />
        <section className={wrapperChildrenClass}>{children}</section>
      </main>
    </Suspense>
  );
};
