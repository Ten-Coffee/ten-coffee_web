import { TextFieldProps } from './interfaces/text-field-props.interface';

import { LabelAtom } from '@/components/UI/atoms/typography/label/label.atom';
import { InputMolecule } from '@/components/UI/molecules/input/input.molecule';
import { forwardRef } from 'react';

import './text-field.style.scss';

export const TextFieldMolecule = forwardRef<HTMLInputElement, TextFieldProps>(
  function TextField(
    { label, labelSize = 'medium', icon: Icon, position },
    ref
  ) {
    return (
      <div className="text-field-molecule">
        <LabelAtom value={label} size={labelSize} />
        <InputMolecule.Text icon={Icon} position={position} ref={ref} />
      </div>
    );
  }
);
