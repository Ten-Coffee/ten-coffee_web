import { LabelAtom } from '@/components/UI/atoms/typography/label/label.atom';
import { InputMolecule } from '@/components/UI/molecules/input/input.molecule';
import { Size } from '@/types/size.type';
import { ComponentProps, forwardRef } from 'react';

interface PasswordFieldMoleculeProps extends ComponentProps<'input'> {
  label: string;
  labelSize?: Size;
  helperText?: string;
  error?: boolean;
}

export const PasswordFieldMolecule = forwardRef<
  HTMLInputElement,
  PasswordFieldMoleculeProps
>(function TextField(
  { label, labelSize = 'medium', helperText, error, ...rest },
  ref
) {
  return (
    <div>
      <LabelAtom value={label} size={labelSize} />
      <InputMolecule.Password ref={ref} aria-invalid={error} {...rest} />
      {helperText && (
        <span className={error ? 'error-text' : 'helper-text'}>
          {helperText}
        </span>
      )}
    </div>
  );
});
