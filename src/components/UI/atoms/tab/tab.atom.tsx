import './tab.styles.scss';
import { useTabsHook } from '@/hooks/use-tabs.hook';

interface TabAtomProps {
  name: string;
  value: string;
  defaultValue: string;
}

export const TabAtom = ({ name, value, defaultValue }: TabAtomProps) => {
  const [tabs, setTabs] = useTabsHook(defaultValue);

  const isActive = tabs === value;

  const className = isActive ? 'tab-wrapper__active' : 'tab-wrapper';

  return (
    <button onClick={() => setTabs(value)} className={className}>
      {name}
    </button>
  );
};
