import { LabelAtom } from '@/components/UI/atoms/typography/label/label.atom';
import { InputMolecule } from '@/components/UI/molecules/input/input.molecule';
import { ComponentProps, ElementType, forwardRef } from 'react';

export interface TextFieldProps extends ComponentProps<'div'> {
  label: string;
  icon?: ElementType;
  position?: 'left' | 'right';
  labelSize?: 'small' | 'medium' | 'large';
}

export const TextFieldMolecule = forwardRef<HTMLInputElement, TextFieldProps>(
  function TextField(
    { label, labelSize = 'medium', icon: Icon, position },
    ref
  ) {
    return (
      <div>
        <LabelAtom value={label} size={labelSize} />
        <InputMolecule.Text icon={Icon} position={position} ref={ref} />
      </div>
    );
  }
);
