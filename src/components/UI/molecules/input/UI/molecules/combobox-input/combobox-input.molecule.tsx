import './combobox-input.styles.scss';
import { useComboboxInputHook } from '@/components/UI/molecules/input/UI/molecules/combobox-input/use-combobox-input.hook';
import { icons } from '@/icons/icons';
import { SelectOptionsInterface } from '@/interfaces/select-options.interface';
import { Dispatch, forwardRef, SetStateAction } from 'react';

interface ComboboxInputMoleculeProps {
  options: SelectOptionsInterface[];
  value?: SelectOptionsInterface;
  onChange?: (value: SelectOptionsInterface) => void;
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
}

export const ComboboxInputMolecule = forwardRef<
  HTMLDivElement,
  ComboboxInputMoleculeProps
>(function Select({ options, onChange, value, search, setSearch }, ref) {
  const {
    isOpen,
    toggleSelect,
    handleSelect,
    icon: Icon
  } = useComboboxInputHook({ onChange });

  const SearchIcon = icons.Search;

  return (
    <div className={'combobox-input'}>
      <div
        ref={ref}
        className="combobox-input__selected-value"
        onClick={toggleSelect}
      >
        {value?.value || 'Selecione uma opção'}
        <div className="icon">
          <Icon />
        </div>
      </div>

      {isOpen && (
        <ul className={'combobox-input__options-list'}>
          <div className={'options-list__search-input'}>
            <input
              className={'search-input__input'}
              type={'text'}
              placeholder={'Pesquisar...'}
              value={search}
              onChange={(event) => setSearch(event.target.value)}
            />
            <SearchIcon className={'search-input__icon'} />
          </div>
          {options?.length > 0 ? (
            options?.map((option) => (
              <li
                key={option.id}
                className="options-list__option"
                onClick={() => handleSelect(option)}
              >
                {option.value}
              </li>
            ))
          ) : (
            <li className="options-list__option">Nenhuma opção encontrada</li>
          )}
        </ul>
      )}
    </div>
  );
});
