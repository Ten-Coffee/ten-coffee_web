import { LabelAtom } from '@/components/UI/atoms/typography/label/label.atom';
import { InputMolecule } from '@/components/UI/molecules/input/input.molecule';
import { SelectOptionsInterface } from '@/interfaces/select-options.interface';
import { Size } from '@/types/size.type';
import { ComponentProps, Dispatch, forwardRef, SetStateAction } from 'react';

interface ComboboxFieldMoleculeProps
  extends Omit<ComponentProps<'input'>, 'onChange' | 'value'> {
  label: string;
  labelSize?: Size;
  helperText?: string;
  error?: boolean;
  options: SelectOptionsInterface[];
  value?: SelectOptionsInterface;
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
  onChange?: (value: SelectOptionsInterface) => void;
}

export const ComboboxFieldMolecule = forwardRef<
  HTMLDivElement,
  ComboboxFieldMoleculeProps
>(function TextField(
  {
    label,
    labelSize = 'medium',
    helperText,
    error,
    options,
    value,
    onChange,
    search,
    setSearch,
    ...rest
  },
  ref
) {
  return (
    <div>
      <LabelAtom value={label} size={labelSize} />
      <InputMolecule.Combobox
        value={value}
        onChange={onChange}
        options={options}
        ref={ref}
        aria-invalid={error}
        search={search}
        setSearch={setSearch}
        {...rest}
      />
      {helperText && (
        <span className={error ? 'error-text' : 'helper-text'}>
          {helperText}
        </span>
      )}
    </div>
  );
});
