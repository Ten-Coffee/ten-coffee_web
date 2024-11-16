'use client';

import './user-form.styles.scss';

import { useUserFormHook } from './use-user-form.hook';

import { ButtonAtom } from '@/components/UI/atoms/button/button.atom';
import { ComboboxFieldMolecule } from '@/components/UI/molecules/combobox-field/combobox-field.molecule';
import { SelectFieldMolecule } from '@/components/UI/molecules/select-field/select-field.molecule';
import { TextFieldMolecule } from '@/components/UI/molecules/text-field/text-field.molecule';
import { filteredPermissionLabelsForSelect } from '@/enums/user-permission.enum';
import { Controller } from 'react-hook-form';

export const UserFormOrganism = () => {
  const { handleCancel, form, data, setSearch, search, handleForm } =
    useUserFormHook();
  const {
    formState: { errors }
  } = form;

  return (
    <form className={'user-form'} onSubmit={form.handleSubmit(handleForm)}>
      <div className={'user-form__fields'}>
        <TextFieldMolecule
          label={'Nome'}
          {...form.register('name')}
          error={!!errors.name}
          helperText={errors.name?.message}
        />
        <Controller
          control={form.control}
          name="permission"
          render={({ field }) => (
            <SelectFieldMolecule
              {...field}
              value={field.value}
              onChange={field.onChange}
              options={filteredPermissionLabelsForSelect}
              label="Permissão"
              error={!!errors.permission}
              helperText={errors.permission?.message}
            />
          )}
        />
        <Controller
          control={form.control}
          name="coffeeShop"
          render={({ field }) => (
            <ComboboxFieldMolecule
              {...field}
              options={data!}
              value={field.value}
              onChange={field.onChange}
              label={'Cafeteria'}
              error={!!errors.coffeeShop}
              helperText={errors.coffeeShop?.message}
              setSearch={setSearch}
              search={search}
            />
          )}
        />
      </div>
      <div className={'user-form__buttons'}>
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
