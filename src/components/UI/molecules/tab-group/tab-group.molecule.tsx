import { TabAtom } from '@/components/UI/atoms/tab/tab.atom';
import { useTabsHook } from '@/hooks/use-tabs.hook';
import { ReactNode } from 'react';
import './tab-group.styles.scss';

interface TabGroupMoleculeProps {
  tabs: {
    name: string;
    children: ReactNode;
    value: string;
  }[];
}

export const TabGroupMolecule = ({ tabs }: TabGroupMoleculeProps) => {
  const defaultValue = tabs[0].value;
  const [stateTab] = useTabsHook(defaultValue);

  const foundTab = tabs.find((tab) => tab.value === stateTab);

  return (
    <div className={'tab-group'}>
      <div className={'tab-group__tabs-container'}>
        {tabs.map(({ name, value }) => (
          <TabAtom
            name={name}
            value={value}
            key={value}
            defaultValue={defaultValue}
          />
        ))}
      </div>

      {foundTab && foundTab.children}
    </div>
  );
};
