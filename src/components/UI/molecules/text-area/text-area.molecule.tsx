import { LabelAtom } from '@/components/UI/atoms/typography/label/label.atom';
import { InputMolecule } from '@/components/UI/molecules/input/input.molecule';
import { Size } from '@/types/size.type';
import { ComponentProps, forwardRef } from 'react';

interface TextFieldProps extends ComponentProps<'textarea'> {
  label: string;
  labelSize?: Size;
  helperText?: string;
  error?: boolean;
}

export const TextAreaMolecule = forwardRef<HTMLTextAreaElement, TextFieldProps>(
  function TextField(
    { label, labelSize = 'medium', helperText, error, disabled, ...rest },
    ref
  ) {
    return (
      <div>
        <LabelAtom value={label} disabled={disabled} size={labelSize} />
        <InputMolecule.TextArea
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
  }
);
