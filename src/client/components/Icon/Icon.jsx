import React from 'react';
import PT from 'prop-types';

function Icon(props) {
  const { size, name } = props;

  const href = `#icon-${name}`;

  return (
    <svg width={ size } height={ size } fill="currentColor">
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
};
Icon.defaultProps = {
  size: '24',
};

export default Icon;
