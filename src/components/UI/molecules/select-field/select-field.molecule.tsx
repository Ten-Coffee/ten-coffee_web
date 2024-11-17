import { LabelAtom } from '@/components/UI/atoms/typography/label/label.atom';
import { InputMolecule } from '@/components/UI/molecules/input/input.molecule';
import { SelectOptionsInterface } from '@/interfaces/select-options.interface';
import { Size } from '@/types/size.type';
import { ComponentProps, forwardRef } from 'react';

interface SelectFieldMoleculeProps
  extends Omit<ComponentProps<'input'>, 'onChange' | 'value'> {
  label: string;
  labelSize?: Size;
  helperText?: string;
  error?: boolean;
  options: SelectOptionsInterface[];
  value?: string | number;
  onChange?: (value: string | number) => void;
}

export const SelectFieldMolecule = forwardRef<
  HTMLDivElement,
  SelectFieldMoleculeProps
>(function TextField(
  {
    label,
    labelSize = 'medium',
    helperText,
    error,
    options,
    value,
    onChange,
    disabled,
    ...rest
  },
  ref
) {
  return (
    <div>
      <LabelAtom value={label} size={labelSize} disabled={disabled} />
      <InputMolecule.Select
        value={value}
        onChange={onChange}
        options={options}
        ref={ref}
        aria-invalid={error}
        disabled={disabled}
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
