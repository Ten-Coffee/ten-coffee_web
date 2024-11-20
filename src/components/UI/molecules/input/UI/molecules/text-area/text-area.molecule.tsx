import { ComponentProps, forwardRef } from 'react';
import './text-area.styles.scss';

interface TextAreaProps extends ComponentProps<'textarea'> {
  error?: boolean;
}

export const TextAreaMolecule = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  function TextArea({ error, disabled, ...rest }, ref) {
    return (
      <textarea
        ref={ref}
        disabled={disabled}
        aria-invalid={error}
        className="text-area"
        {...rest}
      />
    );
  }
);
