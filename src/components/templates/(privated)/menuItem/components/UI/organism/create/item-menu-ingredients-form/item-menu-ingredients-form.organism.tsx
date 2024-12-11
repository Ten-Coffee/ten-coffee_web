'use client';

import { useItemMenuIngredientsFormHook } from '@/components/templates/(privated)/menuItem/components/UI/organism/create/item-menu-ingredients-form/use-item-menu-ingredients-form.hook';
import { ButtonAtom } from '@/components/UI/atoms/button/button.atom';
import { ComboboxFieldMolecule } from '@/components/UI/molecules/combobox-field/combobox-field.molecule';
import { TextFieldMolecule } from '@/components/UI/molecules/text-field/text-field.molecule';
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
                  options={options || []} // Lista de opções carregadas
                  value={
                    options.find(
                      (option) => option.id === field.value.ingredientTypeId
                    ) || undefined
                  }
                  onChange={(selected) =>
                    field.onChange({ ingredientTypeId: selected.id })
                  }
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
              ingredient: { ingredientTypeId: '' },
              quantity: 0
            })
          }
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
