import { LabelAtom } from '@/components/UI/atoms/typography/label/label.atom';
import { InputMolecule } from '@/components/UI/molecules/input/input.molecule';
import { Position } from '@/type/position.type';
import { Size } from '@/type/size.type';
import { ComponentProps, ElementType, forwardRef } from 'react';

import './text-field.style.scss';

export interface TextFieldProps extends ComponentProps<'input'> {
  label: string;
  icon?: ElementType;
  position?: Position;
  labelSize?: Size;
  helperText?: string;
  error?: boolean;
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
      ...rest
    },
    ref
  ) {
    return (
      <div>
        <LabelAtom value={label} size={labelSize} />
        <InputMolecule.Text
          icon={Icon}
          position={position}
          ref={ref}
          aria-invalid={error}
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