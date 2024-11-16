import './select-input.styles.scss';
import { useSelectInputHook } from '@/components/UI/molecules/input/UI/molecules/select-input/use-select-input.hook';
import { SelectOptionsInterface } from '@/interfaces/select-options.interface';
import { forwardRef } from 'react';

interface SelectInputMoleculeProps {
  options: SelectOptionsInterface[];
  value: string | number | readonly string[] | undefined;
  onChange?: (value: string | number) => void;
}

export const SelectInputMolecule = forwardRef<
  HTMLDivElement,
  SelectInputMoleculeProps
>(function Select({ options, onChange, value }, ref) {
  const {
    isOpen,
    toggleSelect,
    handleSelect,
    icon: Icon
  } = useSelectInputHook({ onChange });

  return (
    <div className={'select-input'}>
      <div ref={ref} className="selected-value" onClick={toggleSelect}>
        {value || 'Selecione uma opção'}
        <div className="icon">
          <Icon />
        </div>
      </div>

      {isOpen && (
        <ul className="select-input__options-list">
          {options.map(({ id, value }) => (
            <li
              key={id}
              className="options-list__option"
              onClick={() => handleSelect(id)}
            >
              {value}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
});
