import './table-body.style.scss';

import { ColumnInterface } from '@/components/UI/organism/table/interfaces/column.interface';
import { RowActionsInterface } from '@/components/UI/organism/table/interfaces/row-actions.interface';
import { TableDataAtom } from '@/components/UI/organism/table/UI/atoms/table-data/table-data.atom';
import { Fragment, ReactNode } from 'react';

interface TableBodyMoleculeProps<T> {
  data: T[] | undefined;
  columns: ColumnInterface<T>[];
  rowActions?: RowActionsInterface<T>[];
}

export const TableBodyMolecule = <T,>({
  data,
  columns,
  rowActions
}: TableBodyMoleculeProps<T>) => {
  const totalColumns = columns.length + (rowActions?.length || 0);

  return (
    <tbody>
      {data?.length === 0 ||
        (!data && (
          <tr className={'row-without-data'}>
            <td colSpan={totalColumns}>Nenhum registro encontrado</td>
          </tr>
        ))}
      {data &&
        data.map((item, index) => (
          <tr className="table-row" key={index}>
            {columns.map(({ key, render }, columnIndex) => (
              <Fragment key={columnIndex}>
                {render ? (
                  render(item)
                ) : (
                  <TableDataAtom.Default value={item[key] as ReactNode} />
                )}
              </Fragment>
            ))}
            {rowActions?.map(({ icon, onClick, condition }, index) => (
              <TableDataAtom.Icon
                icon={icon}
                onClick={() => onClick(item)}
                disabled={condition && !condition(item)}
                key={index}
              />
            ))}
          </tr>
        ))}
    </tbody>
  );
};
