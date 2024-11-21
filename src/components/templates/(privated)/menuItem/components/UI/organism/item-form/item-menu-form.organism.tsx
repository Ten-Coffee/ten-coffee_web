'use client';

import { useMenuItemForm } from '@/components/templates/(privated)/menuItem/components/UI/organism/item-form/use-item-form.hook';
import { ButtonAtom } from '@/components/UI/atoms/button/button.atom';
import { SelectFieldMolecule } from '@/components/UI/molecules/select-field/select-field.molecule';
import { TextFieldMolecule } from '@/components/UI/molecules/text-field/text-field.molecule';
import {
  itemCategoryLabelsForSelect,
  mapItemCategory
} from '@/enums/item-category.enum';
import { Controller } from 'react-hook-form';

import './item-menu-form.styles.scss';

export const ItemMenuFormOrganism = () => {
  const { form, saveItem } = useMenuItemForm();
  const { register, handleSubmit, control, formState } = form;

  const handleCategoryChange = (value: string | number) => {
    const mappedCategory = mapItemCategory[value];
    return mappedCategory || '';
  };

  return (
    <form className="item-menu-form" onSubmit={handleSubmit(saveItem)}>
      <div className="item-menu-form__fields">
        <TextFieldMolecule
          label="Nome"
          {...register('name')}
          error={!!formState.errors.name}
          helperText={formState.errors.name?.message}
        />
        <TextFieldMolecule
          label="Descrição"
          {...register('description')}
          error={!!formState.errors.description}
          helperText={formState.errors.description?.message}
        />

        <Controller
          control={control}
          name="category"
          render={({ field }) => (
            <SelectFieldMolecule
              {...field}
              value={Object.keys(mapItemCategory).find(
                (key) => mapItemCategory[key] === field.value
              )}
              onChange={(value) => field.onChange(handleCategoryChange(value))}
              options={itemCategoryLabelsForSelect}
              label="Categoria"
              error={!!formState.errors.category}
              helperText={formState.errors.category?.message}
            />
          )}
        />

        <TextFieldMolecule
          label="Preço"
          {...register('price')}
          error={!!formState.errors.price}
          helperText={formState.errors.price?.message}
        />
      </div>

      <div className="item-menu-form__buttons">
        <ButtonAtom.Wrapper
          hierarchy="outlined"
          type="button"
          onClick={() => form.reset()}
        >
          Cancelar
        </ButtonAtom.Wrapper>
        <ButtonAtom.Wrapper hierarchy="enabled" type="submit">
          Continuar
        </ButtonAtom.Wrapper>
      </div>
    </form>
  );
};
