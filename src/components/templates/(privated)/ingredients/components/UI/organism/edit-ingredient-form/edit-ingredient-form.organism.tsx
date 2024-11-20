'use client';

import { useEditIngredientFormHok } from '@/components/templates/(privated)/ingredients/components/UI/organism/edit-ingredient-form/use-edit-ingredient-form.hok';
import { ButtonAtom } from '@/components/UI/atoms/button/button.atom';
import { SelectFieldMolecule } from '@/components/UI/molecules/select-field/select-field.molecule';
import { TextAreaMolecule } from '@/components/UI/molecules/text-area/text-area.molecule';
import { TextFieldMolecule } from '@/components/UI/molecules/text-field/text-field.molecule';
import { measurementLabelsForSelect } from '@/enums/measurement.enum';
import { Controller } from 'react-hook-form';
import './edit-ingredient-form.styles.scss';

export const EditIngredientFormOrganism = () => {
  const { handleBack, form, submitForm } = useEditIngredientFormHok();
  const {
    formState: { errors }
  } = form;

  return (
    <form
      onSubmit={form.handleSubmit(submitForm)}
      className={'edit-ingredients-form'}
    >
      <div className={'edit-ingredients-form__fields'}>
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

      <div className={'edit-ingredients-form__buttons'}>
        <ButtonAtom.Wrapper
          hierarchy={'outlined'}
          type={'button'}
          onClick={handleBack}
        >
          Cancelar
        </ButtonAtom.Wrapper>
        <ButtonAtom.Wrapper hierarchy={'enabled'} type={'submit'}>
          Editar
        </ButtonAtom.Wrapper>
      </div>
    </form>
  );
};
