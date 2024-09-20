import { sidebarStore } from '@/store/sidebar.store';

const useWrapperHook = () => {
  const { isOpen } = sidebarStore();
  const wrapperChildrenClass = isOpen
    ? 'wrapper__children-is-open'
    : 'wrapper__children';

  return {
    wrapperChildrenClass
  };
};

export default useWrapperHook;
