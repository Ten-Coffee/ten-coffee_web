'use client';

import './edit-user-form.styles.scss';

import { useEditUserFormHook } from '@/components/templates/(privated)/user/components/UI/organism/edit-user-form/use-edit-user-form.hook';
import { ButtonAtom } from '@/components/UI/atoms/button/button.atom';
import { SelectFieldMolecule } from '@/components/UI/molecules/select-field/select-field.molecule';
import { TextFieldMolecule } from '@/components/UI/molecules/text-field/text-field.molecule';
import {
  filteredPermissionLabelsForSelect,
  permissionLabelsForSelect
} from '@/enums/user-permission.enum';
import { Controller } from 'react-hook-form';

export const EditUserFormOrganism = () => {
  const { form, submitForm, handleCancel } = useEditUserFormHook();
  const {
    formState: { errors }
  } = form;
  const isRepresentante = form.watch('permission') === 'Representante';

  return (
    <form className={'edit-user-form'} onSubmit={form.handleSubmit(submitForm)}>
      <div className={'edit-user-form__fields'}>
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
              disabled={isRepresentante}
              {...field}
              value={field.value}
              onChange={field.onChange}
              options={
                isRepresentante
                  ? permissionLabelsForSelect
                  : filteredPermissionLabelsForSelect
              }
              label="Permissão"
              error={!!errors.permission}
              helperText={errors.permission?.message}
            />
          )}
        />
        <TextFieldMolecule
          label={'Cafeteria'}
          disabled={true}
          {...form.register('coffeeShop')}
          error={!!errors.coffeeShop}
          helperText={errors.coffeeShop?.message}
        />
        {isRepresentante && (
          <>
            <Controller
              control={form.control}
              name="phone"
              render={({ field }) => (
                <TextFieldMolecule
                  label={'Telefone'}
                  value={field.value || ''}
                  onChange={field.onChange}
                  mask="phone"
                  error={!!errors.phone}
                  helperText={errors.phone?.message}
                />
              )}
            />
            <Controller
              control={form.control}
              name="cpf"
              render={({ field }) => (
                <TextFieldMolecule
                  disabled={true}
                  label={'CPF'}
                  value={field.value || ''}
                  onChange={field.onChange}
                  mask="cpf"
                  error={!!errors.phone}
                  helperText={errors.phone?.message}
                />
              )}
            />
          </>
        )}
      </div>
      {/*<p>{JSON.stringify(errors)}</p>*/}
      <div className={'edit-user-form__buttons'}>
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
