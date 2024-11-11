'use client';

import { useWrapperHook } from '@/components/UI/atoms/wrapper/use-wrapper.hook';
import { ToastMolecule } from '@/components/UI/molecules/toast/toast.molecule';
import { SidebarOrganism } from '@/components/UI/organism/sidebar/sidebar.organism';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactNode } from 'react';
import './wrapper.style.scss';

const queryClient = new QueryClient();

interface WrapperAtomProps {
  children: ReactNode;
}

export const WrapperAtom = ({ children }: WrapperAtomProps) => {
  const { wrapperChildrenClass } = useWrapperHook();

  return (
    <QueryClientProvider client={queryClient}>
      <main className={'wrapper'}>
        <SidebarOrganism />
        <section className={wrapperChildrenClass}>{children}</section>
        <ToastMolecule />
      </main>
    </QueryClientProvider>
  );
};
