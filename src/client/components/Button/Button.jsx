import React from 'react';
import PT from 'prop-types';

import noop from 'utilities/noop';

import Classes from './styles';


function Button(props) {
  const {
    className,
    children,
    onClick,
    type,
    disabled,
  } = props;

  let classNames = Classes.root;
  if (type) classNames += ` ${Classes[type]}`;
  if (className) classNames += ` ${className}`;

  return (
    <button
      className={ classNames }
      type="button"
      onClick={ onClick }
      disabled={ disabled }
    >
      { children }
    </button>
  );
}
Button.propTypes = {
  className: PT.string,
  children: PT.node,
  onClick: PT.func,
  type: PT.oneOf([
    'primary',
    'secondary',
    'text',
  ]),
  disabled: PT.bool,
};
Button.defaultProps = {
  className: '',
  children: '',
  onClick: noop,
  type: 'primary',
  disabled: false,
};

export default Button;
