import { useTableCardHook } from '@/components/templates/(privated)/tables/components/UI/organism/table-card/use-table-card.hook';
import { TableStatusFilterAtom } from '@/components/UI/atoms/table-status-filter/table-status-filter.atom';
import { DropdownMenuMolecule } from '@/components/UI/molecules/dropdown-menu/dropdown-menu.molecule';
import { TableStatusEnum } from '@/enums/table-status.enum';
import { icons } from '@/icons/icons';
import './table-card.styles.scss';
import { tableNumberMask, timeMask } from '@/utils/mask.utils';

interface TableCardOrganismProps {
  id: string;
  number: string;
  status: TableStatusEnum;
  time: string;
}

export const TableCardOrganism = ({
  id,
  number,
  status,
  time
}: TableCardOrganismProps) => {
  const ClockIcon = icons.Clock;

  const { dropdown } = useTableCardHook({
    status
  });

  const dropdownItem = {
    ...dropdown,
    id
  };

  return (
    <div className={'table-card'}>
      <div className={'table-card__row'}>
        <span className={'row__title'}>{tableNumberMask(number)}</span>

        <div className={'row__icon-wrapper'}>
          <DropdownMenuMolecule {...dropdownItem} />
        </div>
      </div>
      <div className={'table-card__row'}>
        <TableStatusFilterAtom isCard={true} status={status} />
        <div className={'row__counter-time'}>
          <label className={'counter-time__label'}>Últ. atendimento</label>
          <div className={'counter-time__clock-span'}>
            <ClockIcon className={'clock-span__clock-icon'} />
            <span className={'clock-span__timer'}>{timeMask(time)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
