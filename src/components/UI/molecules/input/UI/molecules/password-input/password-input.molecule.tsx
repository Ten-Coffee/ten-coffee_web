import './password-input.style.scss';
import { InputProps } from '@/components/UI/molecules/input/interfaces/input-props.interface';
import { InputWrapperAtom } from '@/components/UI/molecules/input/UI/atoms/input-wrapper/password-wrapper.atom';
import { InputAtom } from '@/components/UI/molecules/input/UI/atoms/input/input.atom';
import { usePasswordInputHook } from '@/components/UI/molecules/input/UI/molecules/password-input/use-password-input.hook';
import { forwardRef } from 'react';

export const PasswordInputMolecule = forwardRef<HTMLInputElement, InputProps>(
  function Input({ ...props }, ref) {
    const { type, icon: Icon, toggle } = usePasswordInputHook();

    return (
      <InputWrapperAtom>
        <Icon onClick={toggle} className={'password-input-wrapper__icon'} />
        <InputAtom ref={ref} type={type} {...props} />
      </InputWrapperAtom>
    );
  }
);
