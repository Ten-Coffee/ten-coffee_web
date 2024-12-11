'use client';

import { useEditIngredientMenuItemFormHook } from '@/components/templates/(privated)/menuItem/components/UI/organism/edit/edit-ingredient-item-menu-form/use-edit-ingredientes-menu-item-form.hook';
import { ButtonAtom } from '@/components/UI/atoms/button/button.atom';
import { ComboboxFieldMolecule } from '@/components/UI/molecules/combobox-field/combobox-field.molecule';
import { TextFieldMolecule } from '@/components/UI/molecules/text-field/text-field.molecule';
import { icons } from '@/icons/icons';
import { Controller } from 'react-hook-form';
import './edit-ingredient-item-menu-form.styles.scss';

export const EditIngredientItemMenuFormOrganism = () => {
  const {
    handleCancel,
    handleSubmit,
    form,
    fields,
    append,
    remove,
    options,
    setSearch,
    search
  } = useEditIngredientMenuItemFormHook();

  return (
    <form
      className="edit-ingredient-item-menu-form"
      onSubmit={form.handleSubmit(handleSubmit)}
    >
      <div className="edit-ingredient-item-menu-form__fields">
        {fields.map((field, index) => (
          <div
            key={field.id}
            className="edit-ingredient-item-menu-form__field-row"
          >
            <Controller
              control={form.control}
              name={`ingredients.${index}.ingredientTypeId`}
              render={({ field }) => (
                <ComboboxFieldMolecule
                  {...field}
                  options={options || []}
                  value={
                    options.find((option) => option.id === field.value) ||
                    undefined
                  }
                  onChange={(selected) => field.onChange(selected.id)} // Armazena apenas o ID
                  label="Ingrediente"
                  setSearch={setSearch}
                  search={search}
                />
              )}
            />

            <Controller
              control={form.control}
              name={`ingredients.${index}.quantity`}
              render={({ field }) => (
                <TextFieldMolecule
                  {...field}
                  type="number"
                  value={field.value}
                  onChange={(e) =>
                    field.onChange(parseFloat(e.target.value) || 0)
                  }
                  label="Quantidade"
                  placeholder="Digite a quantidade"
                />
              )}
            />

            <ButtonAtom.Wrapper
              hierarchy="ghosted"
              type="button"
              onClick={() => remove(index)}
            >
              <ButtonAtom.Icon icon={icons.Trash} />
              Remover
            </ButtonAtom.Wrapper>
          </div>
        ))}
        <ButtonAtom.Wrapper
          hierarchy="outlined"
          type="button"
          onClick={() =>
            append({
              ingredientTypeId: 0,
              quantity: 0
            })
          }
        >
          + Adicionar Ingrediente
        </ButtonAtom.Wrapper>
      </div>
      <div className="edit-ingredient-item-menu-form__buttons">
        <ButtonAtom.Wrapper
          hierarchy="outlined"
          type="submit"
          onClick={handleCancel}
        >
          Voltar
        </ButtonAtom.Wrapper>
        <ButtonAtom.Wrapper hierarchy="enabled" type="submit">
          Continuar
        </ButtonAtom.Wrapper>
      </div>
    </form>
  );
};
