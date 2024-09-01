import '../../../table-data.style.scss';
import { BodyAtom } from '@/components/UI/atoms/typography/body/body.atom';

interface DefaultTableDataAtomProps {
  value: string | number;
}

export const DefaultTableDataAtom = ({ value }: DefaultTableDataAtomProps) => {
  return (
    <td className={'table-data'}>
      <BodyAtom size={'medium'} value={value} />
    </td>
  );
};
