import '../../../table-data.style.scss';
import { IconButtonAtom } from '@/components/UI/atoms/icon-button/icon-button.atom';
import { ElementType } from 'react';

interface IconButtonTableDataAtomProps {
  icon: ElementType;
  id: number;
}

export const IconButtonTableDataAtom = ({
  icon
}: IconButtonTableDataAtomProps) => {
  return (
    <th className={'table-data'}>
      <IconButtonAtom icon={icon} hierarchy={'ghosted'} size={'medium'} />
    </th>
  );
};
