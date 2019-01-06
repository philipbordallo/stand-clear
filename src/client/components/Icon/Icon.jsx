import React from 'react';
import PT from 'prop-types';

import Classes from './styles';


function Icon(props) {
  const { size, name, className } = props;

  let classNames = Classes.root;
  if (className) classNames += ` ${className}`;

  const href = `#icon-${name}`;

  return (
    <svg className={ classNames } width={ size } height={ size } fill="currentColor">
      <use
        href={ href }
        xlinkHref={ href }
      />
    </svg>
  );
}
Icon.propTypes = {
  name: PT.string.isRequired,
  size: PT.string,
  className: PT.string,
};
Icon.defaultProps = {
  size: '24',
  className: '',
};

export default Icon;
