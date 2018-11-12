import React from 'react';
import PT from 'prop-types';

import noop from 'utilities/noop';

import Classes from './styles';


function Button(props) {
  const { children, onClick, type } = props;

  let classNames = Classes.root;
  if (type) classNames += ` ${Classes[type]}`;

  return (
    <button className={ classNames } type="button" onClick={ onClick }>
      { children }
    </button>
  );
}
Button.propTypes = {
  children: PT.node,
  onClick: PT.func,
  type: PT.oneOf([
    'primary',
    'secondary',
  ]),
};
Button.defaultProps = {
  children: '',
  onClick: noop,
  type: 'primary',
};

export default Button;
