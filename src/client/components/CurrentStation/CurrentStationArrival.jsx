import React from 'react';

import COPY from 'shared/meta/COPY';
import { CurrentStationArrivalShape } from './propTypes';

function CurrentStationArrival(props) {
  const {
    arrivalID,
    minutes,
    name,
    hexColor,
    color,
  } = props;

  const iconStyle = {
    backgroundColor: hexColor,
    width: 12,
    height: 12,
    display: 'inline-block',
    borderRadius: '50%',
    border: '.5px solid black',
  };

  let leaving = `${minutes} minutes`;
  if (minutes === '1') leaving = `${minutes} minute`;
  if (minutes === COPY.leaving) leaving = 'Leaving now';

  return (
    <div key={ arrivalID }>
      <div style={ iconStyle } title={ color } />&nbsp;
      { name } – { leaving }
    </div>
  );
}
CurrentStationArrival.propTypes = CurrentStationArrivalShape;

export default CurrentStationArrival;
