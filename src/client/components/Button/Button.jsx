import React from 'react';
import PT from 'prop-types';

import Link from 'components/Link';
import noop from 'utilities/noop';

import Classes from './styles';


function Button(props) {
  const {
    className,
    children,
    onClick,
    type,
    disabled,
    to,
  } = props;

  let classNames = Classes.root;
  if (type) classNames += ` ${Classes[type]}`;
  if (className) classNames += ` ${className}`;

  if (to) {
    return (
      <Link
        to={ to }
        className={ classNames }
        onClick={ onClick }
      >
        { children }
      </Link>
    );
  }

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
  to: PT.string,
};
Button.defaultProps = {
  className: '',
  children: '',
  onClick: noop,
  type: 'primary',
  disabled: false,
  to: '',
};

export default Button;
