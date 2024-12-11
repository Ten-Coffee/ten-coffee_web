import { LabelAtom } from '@/components/UI/atoms/typography/label/label.atom';
import { InputAtom } from '@/components/UI/molecules/input/UI/atoms/input/input.atom';
import { MaskType } from '@/types/input-mask.type';
import { Position } from '@/types/position.type';
import { Size } from '@/types/size.type';
import { ComponentProps, ElementType, forwardRef } from 'react';
import '../text-field/text-field.styles.scss';

interface TextFieldProps extends ComponentProps<'input'> {
  label: string;
  icon?: ElementType;
  position?: Position;
  labelSize?: Size;
  helperText?: string;
  error?: boolean;
  mask?: MaskType;
}

export const FileFieldMolecule = forwardRef<HTMLInputElement, TextFieldProps>(
  function TextField(
    { label, labelSize = 'medium', helperText, error, disabled, ...rest },
    ref
  ) {
    return (
      <div className={'text-field'}>
        <LabelAtom value={label} disabled={disabled} size={labelSize} />
        <InputAtom
          type="file"
          ref={ref}
          disabled={disabled}
          {...rest}
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
