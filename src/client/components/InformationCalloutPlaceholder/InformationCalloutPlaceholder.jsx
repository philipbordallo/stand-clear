import React from 'react';
import PT from 'prop-types';
import Icon from 'components/Icon';

import Classes from './styles';


function InformationCalloutPlaceholder(props) {
  const { hide } = props;

  let rootClassNames = Classes.root;
  if (hide) rootClassNames += ` ${Classes.hidePlaceholder}`;

  return (
    <div className={ rootClassNames }>
      <Icon name="information-filled" className={ Classes.icon } />
      <p className={ Classes.paragraph } />
    </div>
  );
}
InformationCalloutPlaceholder.propTypes = {
  hide: PT.bool,
};
InformationCalloutPlaceholder.defaultProps = {
  hide: false,
};

export default InformationCalloutPlaceholder;
