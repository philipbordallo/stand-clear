import React from 'react';
import PT from 'prop-types';

function Icon(props) {
  const { size, name, className } = props;

  const href = `#icon-${name}`;

  return (
    <svg className={ className } width={ size } height={ size } fill="currentColor">
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
