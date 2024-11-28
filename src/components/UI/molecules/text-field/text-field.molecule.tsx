import { LabelAtom } from '@/components/UI/atoms/typography/label/label.atom';
import { InputMolecule } from '@/components/UI/molecules/input/input.molecule';
import { MaskType } from '@/types/input-mask.type';
import { Position } from '@/types/position.type';
import { Size } from '@/types/size.type';
import { ComponentProps, ElementType, forwardRef } from 'react';
import './text-field.styles.scss';

interface TextFieldProps extends ComponentProps<'input'> {
  label: string;
  icon?: ElementType;
  position?: Position;
  labelSize?: Size;
  helperText?: string;
  error?: boolean;
  mask?: MaskType;
}

export const TextFieldMolecule = forwardRef<HTMLInputElement, TextFieldProps>(
  function TextField(
    {
      label,
      labelSize = 'medium',
      icon: Icon,
      position,
      helperText,
      error,
      disabled,
      mask,
      ...rest
    },
    ref
  ) {
    return (
      <div className={'text-field'}>
        <LabelAtom value={label} disabled={disabled} size={labelSize} />
        <InputMolecule.Text
          icon={Icon}
          position={position}
          ref={ref}
          mask={mask}
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
