'use client';

import './tables.styles.scss';

import { tableSchema } from '@/components/templates/(privated)/tables/schemas/table.schema';
import { useTablesHook } from '@/components/templates/(privated)/tables/use-tables.hook';
import { ButtonAtom } from '@/components/UI/atoms/button/button.atom';
import { TitleAtom } from '@/components/UI/atoms/typography/title/title.atom';
import { TextFieldMolecule } from '@/components/UI/molecules/text-field/text-field.molecule';
import { ModalOrganism } from '@/components/UI/organism/modal/modal.organism';
import { MAX_TABLES } from '@/constants/max-tables.constant';
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
