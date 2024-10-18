import '../../../table-data.style.scss';
import { IconButtonAtom } from '@/components/UI/atoms/icon-button/icon-button.atom';
import { ComponentProps, ElementType } from 'react';

interface IconButtonTableDataAtomProps extends ComponentProps<'button'> {
  icon: ElementType;
}

export const IconButtonTableDataAtom = ({
  icon,
  ...otherProps
}: IconButtonTableDataAtomProps) => {
  return (
    <th className={'table-data'}>
      <div className={'table-data__button'}>
        <IconButtonAtom
          {...otherProps}
          icon={icon}
          hierarchy={'ghosted'}
          size={'medium'}
        />
      </div>
    </th>
  );
};
