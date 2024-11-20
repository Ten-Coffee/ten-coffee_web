import { useEditInventoryFormHook } from '@/components/templates/(privated)/inventory/components/UI/organism/edit-inventory-form/use-edit-inventory-form.hook';
import { ButtonAtom } from '@/components/UI/atoms/button/button.atom';
import './edit-inventory-form.styles.scss';
import { ComboboxFieldMolecule } from '@/components/UI/molecules/combobox-field/combobox-field.molecule';
import { TextFieldMolecule } from '@/components/UI/molecules/text-field/text-field.molecule';
import { Controller } from 'react-hook-form';

export const EditInventoryFormOrganism = () => {
  const {
    handleCancel,
    form,
    submitForm,
    dataIngredientsType,
    search,
    setSearch
  } = useEditInventoryFormHook();
  const {
    formState: { errors }
  } = form;

  return (
    <form
      className={'edit-inventory-form'}
      onSubmit={form.handleSubmit(submitForm)}
    >
      <div className={'edit-inventory-form__fields'}>
        <TextFieldMolecule
          label={'Nome'}
          {...form.register('name')}
          error={!!errors.name}
          helperText={errors.name?.message}
        />
        <Controller
          control={form.control}
          name="ingredientType"
          render={({ field }) => (
            <ComboboxFieldMolecule
              {...field}
              options={dataIngredientsType!}
              value={field.value}
              onChange={field.onChange}
              label={'Ingrediente'}
              error={!!errors.ingredientType}
              helperText={errors.ingredientType?.message}
              setSearch={setSearch}
              search={search}
            />
          )}
        />
        <TextFieldMolecule
          label={'Quantidade'}
          {...form.register('amount')}
          error={!!errors.amount}
          helperText={errors.amount?.message}
        />
        <TextFieldMolecule
          label={'Fornecedor'}
          {...form.register('supplier')}
          error={!!errors.supplier}
          helperText={errors.supplier?.message}
        />
        <TextFieldMolecule
          {...form.register('lastPurchase')}
          label={'Data da Última Compra'}
          type="date"
          placeholder="dd/mm/aaaa"
          error={!!errors.lastPurchase}
          helperText={errors.lastPurchase?.message}
        />
        <TextFieldMolecule
          {...form.register('dueDateClosed')}
          label={'Data de Validade (Fechado)'}
          type="date"
          placeholder="dd/mm/aaaa"
          error={!!errors.dueDateClosed}
          helperText={errors.dueDateClosed?.message}
        />
        <TextFieldMolecule
          {...form.register('dueDateOpen')}
          label={'Data de Validade (Aberto)'}
          type="date"
          placeholder="dd/mm/aaaa"
          error={!!errors.dueDateOpen}
          helperText={errors.dueDateOpen?.message}
        />
      </div>
      <div className={'edit-inventory-form__buttons'}>
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
