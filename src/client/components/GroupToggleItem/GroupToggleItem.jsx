import React from 'react';
import PT from 'prop-types';

import noop from 'utilities/noop';

import Classes from './styles';

function GroupToggleItem(props) {
  const {
    onChange,
    checked,
    name,
    value,
    children,
  } = props;

  return (
    <label className={ Classes.root }>
      <input
        checked={ checked }
        className={ Classes.input }
        name={ name }
        onChange={ onChange }
        type="radio"
        value={ value }
      />
      <span className={ Classes.button }>
        { children }
      </span>
    </label>
  );
}
GroupToggleItem.propTypes = {
  checked: PT.bool,
  children: PT.node,
  name: PT.string,
  onChange: PT.func,
  value: PT.string,
};
GroupToggleItem.defaultProps = {
  checked: false,
  children: '',
  name: '',
  onChange: noop,
  value: '',
};

export default GroupToggleItem;
