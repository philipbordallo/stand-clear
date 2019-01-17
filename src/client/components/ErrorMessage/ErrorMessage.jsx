import React from 'react';
import PT from 'prop-types';

import Classes from './styles';

function ErrorMessage(props) {
  const { children } = props;
  return (
    <div className={ Classes.root }>
      { children }
    </div>
  );
}
ErrorMessage.propTypes = {
  children: PT.node,
};
ErrorMessage.defaultProps = {
  children: '',
};

export default ErrorMessage;
