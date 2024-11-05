import { LabelAtom } from '@/components/UI/atoms/typography/label/label.atom';
import { InputMolecule } from '@/components/UI/molecules/input/input.molecule';
import { MaskType } from '@/components/UI/molecules/input/UI/atoms/input/input.atom';
import { Position } from '@/type/position.type';
import { Size } from '@/type/size.type';
import { ComponentProps, ElementType, forwardRef } from 'react';
import '../text-field/text-field.style.scss';

interface TextFieldProps extends ComponentProps<'input'> {
  label: string;
  icon?: ElementType;
  position?: Position;
  labelSize?: Size;
  helperText?: string;
  error?: boolean;
  mask?: MaskType;
}

export const PasswordTextFieldMolecule = forwardRef<
  HTMLInputElement,
  TextFieldProps
>(function TextField(
  {
    label,
    labelSize = 'medium',
    icon: Icon,
    position,
    helperText,
    error,
    mask,
    ...rest
  },
  ref
) {
  return (
    <div>
      <LabelAtom value={label} size={labelSize} />
      <InputMolecule.Password
        icon={Icon}
        position={position}
        ref={ref}
        mask={mask}
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
});
