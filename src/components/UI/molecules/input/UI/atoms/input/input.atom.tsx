import { InputProps } from '@/components/UI/molecules/input/interfaces/input-props.interface';
import { forwardRef } from 'react';
import './input.style.scss';

export const InputAtom = forwardRef<HTMLInputElement, InputProps>(
  function Input({ position, ...props }, ref) {
    const className = `input-atom${position === 'left' ? '__icon-left' : ''}`;

    return <input className={className} ref={ref} {...props} />;
  }
);
