import { InputProps } from '@/components/UI/molecules/input/interfaces/input-props.interface';
import { forwardRef } from 'react';
import InputMask from 'react-input-mask';
import './input.style.scss';

export type MaskType = 'cnpj' | 'cpf' | 'cep' | 'phone' | 'date';

interface MaskedInputProps extends InputProps {
  mask?: MaskType;
}

const maskPatterns: Record<MaskType, string> = {
  cnpj: '99.999.999/9999-99',
  cpf: '999.999.999-99',
  cep: '99999-999',
  phone: '(99) 9 9999-9999',
  date: '99/99/9999'
};

export const InputAtom = forwardRef<HTMLInputElement, MaskedInputProps>(
  function Input({ position, mask, ...props }, ref) {
    const className = `input-atom${position === 'left' ? '__icon-left' : ''}`;
    const maskPattern = mask ? maskPatterns[mask] : '';

    return (
      <InputMask
        mask={maskPattern}
        className={className}
        inputRef={ref}
        {...props}
      />
    );
  }
);
