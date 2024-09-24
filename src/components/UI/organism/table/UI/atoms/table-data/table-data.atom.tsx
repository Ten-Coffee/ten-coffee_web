import { DefaultTableDataAtom } from '@/components/UI/organism/table/UI/atoms/table-data/UI/atoms/default-table-data/default-table-data.atom';
import { IconButtonTableDataAtom } from '@/components/UI/organism/table/UI/atoms/table-data/UI/atoms/icon-button-table-data/icon-button-table-data.atom';
import { StatusTableDataAtom } from '@/components/UI/organism/table/UI/atoms/table-data/UI/atoms/status-table-data/status-table-data.atom';

interface TableDataAtomProps {
  Default: typeof DefaultTableDataAtom;
  Icon: typeof IconButtonTableDataAtom;
  Status: typeof StatusTableDataAtom;
}

export const TableDataAtom: TableDataAtomProps = {
  Default: DefaultTableDataAtom,
  Icon: IconButtonTableDataAtom,
  Status: StatusTableDataAtom
};
