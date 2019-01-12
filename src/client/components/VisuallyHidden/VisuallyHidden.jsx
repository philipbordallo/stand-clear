import React from 'react';
import PT from 'prop-types';

import Classes from './styles';


function VisuallyHidden(props) {
  const { children, id } = props;
  return (
    <div className={ Classes.root } id={ id }>
      { children }
    </div>
  );
}
VisuallyHidden.propTypes = {
  id: PT.string,
  children: PT.node.isRequired,
};
VisuallyHidden.defaultProps = {
  id: '',
};

export default VisuallyHidden;
