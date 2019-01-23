import React from 'react';
import PT from 'prop-types';

import Icon from 'components/Icon';

import Classes from './styles';


function Advisory(props) {
  const { type, description } = props;

  const isEmergency = type === 'EMERGENCY';
  const isDelay = type === 'DELAY';

  const iconType = isEmergency
    ? 'warning-filled'
    : 'warning-outline';

  const iconContent = isEmergency || isDelay
    ? (
      <Icon name={ iconType } className={ Classes.icon } />
    ) : null;

  let advisoryClassNames = Classes.rooy;
  if (isDelay) advisoryClassNames = Classes.delay;
  if (isEmergency) advisoryClassNames = Classes.emergency;

  return (
    <div className={ advisoryClassNames }>
      { iconContent }
      <p className={ Classes.description }>
        { description }
      </p>
    </div>
  );
}
Advisory.propTypes = {
  type: PT.oneOf([
    'EMERGENCY',
    'DELAY',
  ]).isRequired,
  description: PT.string,
};
Advisory.defaultProps = {
  description: '',
};

export default Advisory;
