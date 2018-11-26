import React from 'react';
import PT from 'prop-types';

import Icon from 'components/Icon';

import Classes from './styles';


function InformationCallout(props) {
  const { children } = props;
  return (
    <div className={ Classes.root }>
      <Icon name="information-filled" className={ Classes.icon } />
      <p className={ Classes.paragraph }>
        { children }
      </p>
    </div>
  );
}
InformationCallout.propTypes = {
  children: PT.node.isRequired,
};

export default InformationCallout;
