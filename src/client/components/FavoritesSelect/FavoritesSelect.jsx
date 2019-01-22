import React, { useState, useEffect } from 'react';
import PT from 'prop-types';

import noop from 'utilities/noop';
import { useStationSearch } from 'hooks';

// import Button from 'components/Button';
import SearchInput from 'components/SearchInput';

import Classes from './styles';


function FavoritesSelect(props) {
  const { options, onChange, onToggleDropdown } = props;
  const [searchTerm, setSearchTerm] = useState('');
  const stations = useStationSearch(searchTerm);

  const filteredStations = stations.filter(station => !options.get(station.abbreviation));

  const handleEscapeKeyDown = (event) => {
    if (event.key === 'Escape') {
      onToggleDropdown();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleEscapeKeyDown);

    return () => {
      document.removeEventListener('keydown', handleEscapeKeyDown);
    };
  }, []);

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      document.activeElement.click();
    }
    else if (['ArrowDown', 'ArrowUp'].includes(event.key)) {
      event.preventDefault();

      const direction = {
        ArrowDown: 'nextElementSibling',
        ArrowUp: 'previousElementSibling',
      };
      const sibling = direction[event.key];

      const optionElement = document.activeElement.parentElement[sibling];

      if (optionElement) {
        optionElement.firstChild.focus();
      }
    }
  };

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleClear = () => {
    setSearchTerm('');
  };

  const renderStations = (station) => {
    const isChecked = options.get(station.abbreviation) || false;

    return (
      <label
        key={ station.abbreviation }
        className={ Classes.optionWrapper }
        onKeyDown={ handleKeyDown }
      >
        <input
          type="checkbox"
          name={ station.abbreviation }
          className={ Classes.checkbox }
          onChange={ onChange }
          checked={ isChecked }
        />
        <div className={ Classes.option }>
          <span className={ Classes.shortName }>
            { station.shortName }
          </span>
        </div>
      </label>
    );
  };

  const hasFilteredStations = filteredStations.length > 0;


  let optionsClassName = Classes.options;
  if (hasFilteredStations) optionsClassName += ` ${Classes.optionsFull}`;

  return (
    <React.Fragment>
      <div className={ Classes.root }>
        <SearchInput
          className={ Classes.searchInput }
          onChange={ handleChange }
          onClear={ handleClear }
          searchTerm={ searchTerm }
        />
        <div className={ Classes.dropdown }>
          <div className={ optionsClassName }>
            { hasFilteredStations ? filteredStations.map(renderStations) : null }
          </div>
        </div>
      </div>
      <button type="button" className={ Classes.backdrop } onClick={ onToggleDropdown } />
    </React.Fragment>
  );
}
FavoritesSelect.propTypes = {
  onChange: PT.func,
  onToggleDropdown: PT.func.isRequired,
  options: PT.instanceOf(Map),
};
FavoritesSelect.defaultProps = {
  onChange: noop,
  options: new Map(),
};

export default FavoritesSelect;
