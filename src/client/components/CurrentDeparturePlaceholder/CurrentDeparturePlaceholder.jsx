import React from 'react';
import PT from 'prop-types';

import Classes from './styles';

function CurrentDeparturePlaceholder(props) {
  const { maxWidth } = props;

  const style = { maxWidth };

  return (
    <div className={ Classes.root }>
      <div className={ Classes.icon } />
      <div className={ Classes.information }>
        <div className={ Classes.title } />
        <div className={ Classes.detailPlaceholder } style={ style } />
        <div className={ Classes.carCountPlaceholder } />
      </div>
    </div>
  );
}
CurrentDeparturePlaceholder.propTypes = {
  maxWidth: PT.number.isRequired,
};

export default CurrentDeparturePlaceholder;
