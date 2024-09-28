import { LabelAtom } from '@/components/UI/atoms/typography/label/label.atom';
import { InputMolecule } from '@/components/UI/molecules/input/input.molecule';
import { Position } from '@/type/position.type';
import { Size } from '@/type/size.type';
import { ComponentProps, ElementType, forwardRef } from 'react';

export interface TextFieldProps extends ComponentProps<'input'> {
  label: string;
  icon?: ElementType;
  position?: Position;
  labelSize?: Size;
}

export const TextFieldMolecule = forwardRef<HTMLInputElement, TextFieldProps>(
  function TextField(
    { label, labelSize = 'medium', icon: Icon, position, ...otherProps },
    ref
  ) {
    return (
      <div>
        <LabelAtom value={label} size={labelSize} />
        <InputMolecule.Text
          icon={Icon}
          position={position}
          ref={ref}
          {...otherProps}
        />
      </div>
    );
  }
);
