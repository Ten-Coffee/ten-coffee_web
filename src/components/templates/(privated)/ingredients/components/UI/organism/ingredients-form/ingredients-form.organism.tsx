'use client';

import './ingredients-form.styles.scss';
import { useIngredientsFormHook } from '@/components/templates/(privated)/ingredients/components/UI/organism/ingredients-form/use-ingredients-form.hook';
import { ButtonAtom } from '@/components/UI/atoms/button/button.atom';
import { SelectFieldMolecule } from '@/components/UI/molecules/select-field/select-field.molecule';
import { TextAreaMolecule } from '@/components/UI/molecules/text-area/text-area.molecule';
import { TextFieldMolecule } from '@/components/UI/molecules/text-field/text-field.molecule';
import { measurementLabelsForSelect } from '@/enums/measurement.enum';
import { Controller } from 'react-hook-form';

export const IngredientsFormOrganism = () => {
  const { handleBack, form, submitForm } = useIngredientsFormHook();
  const {
    formState: { errors }
  } = form;

  return (
    <form
      className={'ingredients-form'}
      onSubmit={form.handleSubmit(submitForm)}
    >
      <div className={'ingredients-form__fields'}>
        <TextFieldMolecule
          {...form.register('productName')}
          label={'Nome'}
          error={!!errors.productName}
          helperText={errors.productName?.message}
        />
        <TextFieldMolecule
          {...form.register('category')}
          label={'Categoria'}
          error={!!errors.category}
          helperText={errors.category?.message}
        />
        <Controller
          control={form.control}
          name="measurement"
          render={({ field }) => (
            <SelectFieldMolecule
              {...field}
              value={field.value}
              onChange={field.onChange}
              options={measurementLabelsForSelect}
              label={'Unidade de Medida'}
              placeholder={'KG'}
              error={!!errors.measurement}
              helperText={errors.measurement?.message}
            />
          )}
        />
        <Controller
          control={form.control}
          name="description"
          render={({ field }) => (
            <TextAreaMolecule
              {...field}
              value={field.value}
              onChange={field.onChange}
              label={'Descrição'}
              error={!!errors.description}
              helperText={errors.measurement?.message}
            />
          )}
        />
      </div>

      <div className={'ingredients-form__buttons'}>
        <ButtonAtom.Wrapper
          hierarchy={'outlined'}
          type={'button'}
          onClick={handleBack}
        >
          Cancelar
        </ButtonAtom.Wrapper>
        <ButtonAtom.Wrapper hierarchy={'enabled'} type={'submit'}>
          Continuar
        </ButtonAtom.Wrapper>
      </div>
    </form>
  );
};
