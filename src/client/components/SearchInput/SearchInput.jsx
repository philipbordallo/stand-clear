import React from 'react';
import PT from 'prop-types';

import Icon from 'components/Icon';

import Classes from './styles';


function SearchInput(props) {
  const {
    searchValue,
    onChange,
    onClear,
  } = props;

  const handleClick = () => {
    onClear();
  };

  const renderIcon = () => {
    if (searchValue) {
      return (
        <button
          type="button"
          className={ Classes.closeIcon }
          onClick={ handleClick }
        >
          <Icon name="close" size="30" />
        </button>
      );
    }

    return (
      <div
        className={ Classes.searchIcon }
      >
        <Icon name="search" size="30" />
      </div>
    );
  };

  return (
    <div className={ Classes.root }>
      <input
        className={ Classes.input }
        type="search"
        onChange={ onChange }
        value={ searchValue }
        aria-label="Search Stations"
      />
      { renderIcon() }
    </div>
  );
}
SearchInput.propTypes = {
  onClear: PT.func.isRequired,
  onChange: PT.func.isRequired,
  searchValue: PT.string.isRequired,
};

export default SearchInput;
