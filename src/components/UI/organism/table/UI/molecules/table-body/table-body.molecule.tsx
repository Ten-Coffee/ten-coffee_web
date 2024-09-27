import { TableDataAtom } from '../../atoms/table-data/table-data.atom';
import { StatusTableDataAtom } from '../../atoms/table-data/UI/atoms/status-table-data/status-table-data.atom';

import './table-body.style.scss';

import { icons } from '@/icons/icons';

interface TableBodyMoleculeProps<T> {
  data: T[];
  columns: { key: keyof T }[];
  render?: (item: T) => string | number;
}

export const TableBodyMolecule = <T,>({
  data,
  columns,
  render
}: TableBodyMoleculeProps<T>) => {
  return (
    <tbody>
      {data.length === 0 ? (
        <tr>
          <td colSpan={columns.length}>Nenhum registro encontrado</td>
        </tr>
      ) : (
        data.map((item, index) => (
          <tr key={index} className={'table-row'}>
            {columns.map(({ key }) => {
              const value = item[key];

              if (key === 'status' && typeof value === 'boolean') {
                return <StatusTableDataAtom key={String(key)} value={value} />;
              }

              return (
                <TableDataAtom.Default
                  key={String(key)}
                  value={
                    render
                      ? render(item)
                      : value !== undefined
                        ? String(value)
                        : ''
                  }
                />
              );
            })}
            <TableDataAtom.Icon icon={icons.Edit} id={index} />
            <TableDataAtom.Icon icon={icons.Ellipsis.Vertical} id={index} />
          </tr>
        ))
      )}
    </tbody>
  );
};
