import { InputProps } from '@/components/UI/molecules/input/interfaces/input-props.interface';
import { MASK_PATTERN } from '@/constants/input-mask-pattern.constant';
import { MaskType } from '@/types/input-mask.type';
import { forwardRef } from 'react';
import InputMask from 'react-input-mask';
import './input.style.scss';

interface MaskedInputProps extends InputProps {
  mask?: MaskType;
}

export const InputAtom = forwardRef<HTMLInputElement, MaskedInputProps>(
  function Input({ position, mask, ...props }, ref) {
    const className = `input-atom${position === 'left' ? '__icon-left' : ''}`;
    const maskPattern = mask ? MASK_PATTERN[mask] : '';

    return (
      <InputMask mask={maskPattern} {...props}>
        {(inputProps) => (
          <input {...inputProps} ref={ref} className={className} />
        )}
      </InputMask>
    );
  }
);
