'use client';

import { useInventoryFormHook } from '@/components/templates/(privated)/inventory/components/UI/organism/inventory-form/use-inventory-form.hook';
import { ButtonAtom } from '@/components/UI/atoms/button/button.atom';
import { ComboboxFieldMolecule } from '@/components/UI/molecules/combobox-field/combobox-field.molecule';
import { TextFieldMolecule } from '@/components/UI/molecules/text-field/text-field.molecule';
import React from 'react';
import { Controller } from 'react-hook-form';
import './inventory-form.styles.scss';

export const InventoryFormOrganism = () => {
  const { handleCancel, form, setSearch, search, handleForm, data } =
    useInventoryFormHook();
  const {
    formState: { errors }
  } = form;

  return (
    <form className={'inventory-form'} onSubmit={form.handleSubmit(handleForm)}>
      <div className={'inventory-form__fields'}>
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
              options={data!}
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
      <div className={'inventory-form__buttons'}>
        <ButtonAtom.Wrapper
          hierarchy={'outlined'}
          type={'button'}
          onClick={handleCancel}
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
