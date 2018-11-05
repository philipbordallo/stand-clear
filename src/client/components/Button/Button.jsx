import React from 'react';
import PT from 'prop-types';

import noop from 'utilities/noop';

function Button(props) {
  const { children, onClick } = props;
  return (
    <button type="button" onClick={ onClick }>
      { children }
    </button>
  );
}
Button.propTypes = {
  children: PT.node,
  onClick: PT.func,
};
Button.defaultProps = {
  children: '',
  onClick: noop,
};

export default Button;
