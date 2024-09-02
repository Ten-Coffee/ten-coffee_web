import './text-input.style.scss';
import { InputProps } from '@/components/UI/molecules/input/interfaces/input-props.interface';
import { InputWrapperAtom } from '@/components/UI/molecules/input/UI/atoms/input-wrapper/password-wrapper.atom';
import { InputAtom } from '@/components/UI/molecules/input/UI/atoms/input/input.atom';
import { forwardRef } from 'react';

export const TextInputMolecule = forwardRef<HTMLInputElement, InputProps>(
  function Input({ icon: Icon, position, ...props }, ref) {
    return (
      <InputWrapperAtom>
        {Icon && position === 'left' && <Icon className={'text-input__icon'} />}
        <InputAtom position={position} ref={ref} type={'text'} {...props} />
        {Icon && position === 'right' && (
          <Icon className={'text-input__icon-right'} />
        )}
      </InputWrapperAtom>
    );
  }
);
