import '../../../table-data.style.scss';
import { ReactNode } from 'react';

interface DefaultTableDataAtomProps {
  value: ReactNode;
}

export const DefaultTableDataAtom = ({ value }: DefaultTableDataAtomProps) => {
  return <td className={'table-data'}>{value}</td>;
};
