import React, { useRef } from 'react';
import PT from 'prop-types';

import Icon from 'components/Icon';

import Classes from './styles';


function SearchInput(props) {
  const {
    searchValue,
    onChange,
    onClear,
    isSearchExpanded,
    toggleSearchExpanded,
  } = props;

  const inputRef = useRef(null);

  const handleClick = () => {
    if (isSearchExpanded) {
      onClear();
    }
    else {
      inputRef.current.focus();
    }

    toggleSearchExpanded(prevIsSearchExpanded => !prevIsSearchExpanded);
  };

  let rootClassName = Classes.root;
  if (isSearchExpanded) rootClassName += ` ${Classes.expanded}`;

  const iconName = isSearchExpanded
    ? 'close'
    : 'search';

  const iconSize = isSearchExpanded
    ? '36'
    : '30';

  return (
    <div className={ rootClassName }>
      <input
        ref={ inputRef }
        className={ Classes.input }
        type="text"
        onChange={ onChange }
        value={ searchValue }
        tabIndex={ isSearchExpanded ? 0 : -1 }
      />
      <button
        type="button"
        className={ Classes.inputButton }
        onClick={ handleClick }
      >
        <Icon name={ iconName } size={ iconSize } />
      </button>
    </div>
  );
}
SearchInput.propTypes = {
  onClear: PT.func.isRequired,
  onChange: PT.func.isRequired,
  searchValue: PT.string.isRequired,
  isSearchExpanded: PT.bool.isRequired,
  toggleSearchExpanded: PT.func.isRequired,
};

export default SearchInput;
