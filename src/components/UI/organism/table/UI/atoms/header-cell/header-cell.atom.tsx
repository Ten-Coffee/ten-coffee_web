import './header-cell.style.scss';
import { LabelAtom } from '@/components/UI/atoms/typography/label/label.atom';

interface HeaderCellAtomProps {
  title: string;
  key: string;
}

export const HeaderCellAtom = ({ title, key }: HeaderCellAtomProps) => {
  return (
    <th className={'header-cell'} key={key}>
      <LabelAtom size={'medium'} value={title} />
    </th>
  );
};
