import { useScreenWidthHook } from '@/hooks/use-screen-width.hook';
import { sidebarStore } from '@/store/sidebar.store';

export const useWrapperHook = () => {
  const { isOpen } = sidebarStore();
  const { isDesktop } = useScreenWidthHook();
  const wrapperChildrenClass =
    isOpen && isDesktop ? 'wrapper__children-is-open' : 'wrapper__children';

  return {
    wrapperChildrenClass
  };
};
