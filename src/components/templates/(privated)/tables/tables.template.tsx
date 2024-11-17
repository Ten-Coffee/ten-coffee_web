'use client';

import './tables.styles.scss';

import { TableCardOrganism } from '@/components/templates/(privated)/tables/components/UI/organism/table-card/table-card.organism';
import { tableSchema } from '@/components/templates/(privated)/tables/schemas/table.schema';
import { useTablesHook } from '@/components/templates/(privated)/tables/use-tables.hook';
import { ButtonAtom } from '@/components/UI/atoms/button/button.atom';
import { TableStatusFilterAtom } from '@/components/UI/atoms/table-status-filter/table-status-filter.atom';
import { TitleAtom } from '@/components/UI/atoms/typography/title/title.atom';
import { TextFieldMolecule } from '@/components/UI/molecules/text-field/text-field.molecule';
import { ModalOrganism } from '@/components/UI/organism/modal/modal.organism';
import { MAX_TABLES } from '@/constants/max-tables.constant';
import { getAllTableStatus, TableStatusEnum } from '@/enums/table-status.enum';
import { icons } from '@/icons/icons';
import { Controller } from 'react-hook-form';

export const TablesTemplate = () => {
  const { modal, form } = useTablesHook();
  const {
    formState: { errors }
  } = form;

  console.log(errors);
  const countMesas = 10;

  return (
    <>
      <div className={'tables-header'}>
        <div className={'tables-header__title'}>
          <TitleAtom.Large value={'Mesas'} />
          <span className={'title__count'}>
            ({countMesas} / {MAX_TABLES})
          </span>
        </div>

        <ButtonAtom.Wrapper
          hierarchy={'outlined'}
          type={'button'}
          onClick={modal.toggle}
        >
          <ButtonAtom.Icon icon={icons.Add} />
          Adicionar Mesas
        </ButtonAtom.Wrapper>
      </div>

      <div className={'tables-header__filters'}>
        <span>Filtros</span>
        <div className={'filters__filters-wrapper'}>
          {getAllTableStatus.map((status) => (
            <TableStatusFilterAtom status={status} key={status} />
          ))}
        </div>
      </div>

      <div className={'tables-header__tables-cards'}>
        <TableCardOrganism
          number={'1'}
          status={TableStatusEnum.FREE}
          time={'20'}
        />
      </div>

      <ModalOrganism {...modal}>
        <p className={'tables-header__description'}>
          A quantidade máxima permitida para adicionar mesas é {MAX_TABLES}, e o
          mínimo de tempo do contador é 1 minuto.
        </p>
        <form className={'tables-header__form'}>
          <TextFieldMolecule
            label={'Quantidade'}
            {...form.register('tablesNumber')}
            error={!!errors.tablesNumber}
            helperText={errors.tablesNumber?.message}
          />
          <Controller
            name="counter"
            control={form.control}
            render={({ field }) => (
              <TextFieldMolecule
                {...field}
                icon={icons.Clock}
                mask={'mm:ss'}
                position={'right'}
                label={'Contador'}
                placeholder={'mm:ss'}
                error={!!errors.counter}
                helperText={errors.counter?.message}
                onBlur={() => {
                  const result = tableSchema
                    .pick({ counter: true })
                    .safeParse({ counter: field.value });
                  if (result.success) {
                    field.onChange(result.data.counter);
                  }
                }}
              />
            )}
          />
        </form>
      </ModalOrganism>
    </>
  );
};
