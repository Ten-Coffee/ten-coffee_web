import { useEditMenuItemFormHook } from '@/components/templates/(privated)/menuItem/components/UI/organism/edit/edit-item-menu-form/use-edit-item-menu-form.hook';
import { ButtonAtom } from '@/components/UI/atoms/button/button.atom';
import { FileFieldMolecule } from '@/components/UI/molecules/file-field/file-field.molecule';
import { SelectFieldMolecule } from '@/components/UI/molecules/select-field/select-field.molecule';
import { TextFieldMolecule } from '@/components/UI/molecules/text-field/text-field.molecule';
import {
  itemCategoryLabelsForSelect,
  mapItemCategory
} from '@/enums/item-category.enum';
import { Controller } from 'react-hook-form';
import './edit-item-menu-form.styles.scss';

export const EditItemMenuFormOrganism = () => {
  const { handleCancel, form, submitForm } = useEditMenuItemFormHook();
  const {
    formState: { errors }
  } = form;
  const handleCategoryChange = (value: string | number) => {
    const mappedCategory = mapItemCategory[value];
    return mappedCategory || '';
  };

  return (
    <form
      className={'edit-item-menu-form'}
      onSubmit={form.handleSubmit(submitForm)}
    >
      <div className={'edit-item-menu-form__fields'}>
        <TextFieldMolecule
          label={'Nome'}
          {...form.register('name')}
          error={!!errors.name}
          helperText={errors.name?.message}
        />
        <TextFieldMolecule
          label="Descrição"
          {...form.register('description')}
          error={!!errors.description}
          helperText={errors.description?.message}
        />
        <Controller
          control={form.control}
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
              error={!!errors.category}
              helperText={errors.category?.message}
            />
          )}
        />
        <TextFieldMolecule
          label="Preço"
          {...form.register('price')}
          error={!!errors.price}
          helperText={errors.price?.message}
        />
        <FileFieldMolecule label="Imagem" {...form.register('image')} />
      </div>
      <div className={'edit-item-menu-form__buttons'}>
        <ButtonAtom.Wrapper
          hierarchy={'outlined'}
          type={'button'}
          onClick={handleCancel}
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
