import { useTableCardHook } from '@/components/templates/(privated)/tables/components/UI/organism/table-card/use-table-card.hook';
import { IconButtonAtom } from '@/components/UI/atoms/icon-button/icon-button.atom';
import { TableStatusFilterAtom } from '@/components/UI/atoms/table-status-filter/table-status-filter.atom';
import { DropdownMenu } from '@/components/UI/molecules/dropdown-menu/dropdown-menu.molecule';
import { TableStatusEnum } from '@/enums/table-status.enum';
import { icons } from '@/icons/icons';
import './table-card.styles.scss';
import { tableNumberMask } from '@/utils/mask.utils';

interface TableCardOrganismProps {
  number: string;
  status: TableStatusEnum;
  time: string;
}

export const TableCardOrganism = ({
  number,
  status,
  time
}: TableCardOrganismProps) => {
  const ClockIcon = icons.Clock;

  const cardHook = useTableCardHook({
    status
  });

  return (
    <div className={'table-card'}>
      <div className={'table-card__row'}>
        <span className={'row__title'}>{tableNumberMask(number)}</span>

        <div className={'row__icon-wrapper'}>
          <IconButtonAtom
            onClick={cardHook.toggle}
            icon={icons.Ellipsis.Vertical}
            hierarchy={'ghosted'}
            size={'medium'}
          />
          <DropdownMenu {...cardHook} />
        </div>
      </div>
      <div className={'table-card__row'}>
        <TableStatusFilterAtom isCard={true} status={status} />
        <div className={'row__counter-time'}>
          <ClockIcon className={'counter-time__icon'} />
          <span className={'counter-time__timer'}>{time} min</span>
        </div>
      </div>
    </div>
  );
};
