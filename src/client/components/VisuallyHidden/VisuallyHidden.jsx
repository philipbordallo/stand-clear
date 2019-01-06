import React from 'react';
import PT from 'prop-types';

import Classes from './styles';


function VisuallyHidden(props) {
  const { children } = props;
  return (
    <div className={ Classes.root }>
      { children }
    </div>
  );
}
VisuallyHidden.propTypes = {
  children: PT.node.isRequired,
};

export default VisuallyHidden;
