import { InputProps } from '@/components/UI/molecules/input/interfaces/input-props.interface';
import { InputAtom } from '@/components/UI/molecules/input/UI/atoms/input/input.atom';
import { forwardRef } from 'react';

export const TextInputMolecule = forwardRef<HTMLInputElement, InputProps>(
  function TextInput({ icon: Icon, position, mask, ...props }, ref) {
    return (
      <div className="input-molecule">
        {Icon && position === 'left' && (
          <Icon className="input-molecule__icon" />
        )}
        <InputAtom ref={ref} position={position} mask={mask} {...props} />
        {Icon && position === 'right' && (
          <Icon className="input-molecule__icon-right" />
        )}
      </div>
    );
  }
);
