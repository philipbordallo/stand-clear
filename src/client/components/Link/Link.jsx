import React from 'react';
import PT from 'prop-types';

import { Link as RouterLink } from 'react-router-dom';

import noop from 'utilities/noop';


function Link(props) {
  const { children, ...rest } = props;
  return (
    <RouterLink { ...rest }>
      { children }
    </RouterLink>
  );
}
Link.propTypes = {
  to: PT.string.isRequired,
  onClick: PT.func,
};
Link.defaultProps = {
  onClick: noop,
};

export default Link;
