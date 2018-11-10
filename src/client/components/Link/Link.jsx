/* eslint-disable react/forbid-elements */
import React from 'react';
import PT from 'prop-types';

import { Link as RouterLink } from 'react-router-dom';

import noop from 'utilities/noop';


function Link(props) {
  const {
    children,
    to,
    className,
    onClick,
    type,
  } = props;

  const isNative = type === 'native';
  const isExternal = type === 'external';

  if (isNative || isExternal) {
    const externalProps = isExternal
      ? {
        target: '_blank',
        rel: 'noreferrer noopener',
      } : null;

    return (
      <a
        href={ to }
        className={ className }
        onClick={ onClick }
        { ...externalProps }
      >
        { children }
      </a>
    );
  }

  return (
    <RouterLink to={ to } className={ className } onClick={ onClick }>
      { children }
    </RouterLink>
  );
}
Link.propTypes = {
  to: PT.string.isRequired,
  className: PT.string,
  type: PT.oneOf([
    'external',
    'native',
    'router',
  ]),
  onClick: PT.func,
};
Link.defaultProps = {
  className: '',
  type: 'router',
  onClick: noop,
};

export default Link;
