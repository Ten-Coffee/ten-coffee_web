import { IconButtonAtom } from '@/components/UI/atoms/icon-button/icon-button.atom';
import { useSidebarIconHook } from '@/components/UI/organism/sidebar/UI/atoms/sidebar-icon/use-sidebar-icon.hook';
import './sidebar-icon.style.scss';

export const SidebarIconAtom = () => {
  const { icon, toggleSidebar } = useSidebarIconHook();

  return (
    <i className={'sidebar-icon'}>
      <IconButtonAtom
        onClick={toggleSidebar}
        icon={icon}
        hierarchy={'variation'}
        size={'medium'}
      />
    </i>
  );
};
