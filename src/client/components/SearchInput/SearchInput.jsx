import React from 'react';
import PT from 'prop-types';

function SearchInput(props) {
  const { value } = props;
  return (
    <div>
      <input type="text" value={ value } />
    </div>
  );
}
SearchInput.propTypes = {
  value: PT.string,
};
SearchInput.defaultProps = {
  value: '',
};

export default SearchInput;
