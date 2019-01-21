import React from 'react';
import PT from 'prop-types';

import noop from 'utilities/noop';

import Classes from './styles';


function TextInput(props) {
  const { onChange } = props;

  return (
    <input
      className={ Classes.root }
      type="text"
      onChange={ onChange }
    />
  );
}
TextInput.propTypes = {
  onChange: PT.func,
};
TextInput.defaultProps = {
  onChange: noop,
};

export default TextInput;
