import React from 'react';
import PT from 'prop-types';

import VisuallyHidden from 'components/VisuallyHidden';

import Classes from './styles';


function GroupToggle(props) {
  const { children } = props;
  return (
    <div role="group" aria-labelledby="group-label" className={ Classes.root }>
      <VisuallyHidden id="group-label">Group Departures</VisuallyHidden>
      { children }
    </div>
  );
}
GroupToggle.propTypes = {
  children: PT.node,
};
GroupToggle.defaultProps = {
  children: '',
};

export default GroupToggle;
