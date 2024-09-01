import './header-cell.style.scss';
import { LabelAtom } from '@/components/UI/atoms/typography/label/label.atom';

interface HeaderCellAtomProps {
  value: string;
}

export const HeaderCellAtom = ({ value }: HeaderCellAtomProps) => {
  return (
    <th className={'header-cell'}>
      <LabelAtom value={value} />
    </th>
  );
};
