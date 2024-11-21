'use client';

import { useItemMenuIngredientsFormHook } from '@/components/templates/(privated)/menuItem/components/UI/organism/item-menu-ingredients-form/use-item-menu-ingredients-form.hook';
import { ButtonAtom } from '@/components/UI/atoms/button/button.atom';
import { ComboboxFieldMolecule } from '@/components/UI/molecules/combobox-field/combobox-field.molecule';
import { icons } from '@/icons/icons';
import { Controller } from 'react-hook-form';
import './item-menu-ingredients.styles.scss';

export const ItemMenuIngredientsFormOrganism = () => {
  const {
    form,
    fields,
    append,
    remove,
    options,
    search,
    setSearch,
    handleFormSubmit
  } = useItemMenuIngredientsFormHook();

  return (
    <form
      className="item-menu-ingredients-form"
      onSubmit={form.handleSubmit(handleFormSubmit)}
    >
      <div className="item-menu-ingredients-form__fields">
        {fields.map((field, index) => (
          <div key={field.id} className="item-menu-ingredients-form__field-row">
            <Controller
              control={form.control}
              name={`ingredients.${index}.ingredient`}
              render={({ field }) => (
                <ComboboxFieldMolecule
                  {...field}
                  options={options || []}
                  value={field.value}
                  onChange={field.onChange}
                  label="Ingrediente"
                  setSearch={setSearch}
                  search={search}
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
          onClick={() => append({ ingredient: { id: '', value: '' } })}
        >
          + Adicionar Ingrediente
        </ButtonAtom.Wrapper>
      </div>
      <div className="item-menu-ingredients-form__buttons">
        <ButtonAtom.Wrapper hierarchy="outlined" type="submit">
          Voltar
        </ButtonAtom.Wrapper>
        <ButtonAtom.Wrapper hierarchy="enabled" type="submit">
          Continuar
        </ButtonAtom.Wrapper>
      </div>
    </form>
  );
};
