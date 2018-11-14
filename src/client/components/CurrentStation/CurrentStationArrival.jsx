import React from 'react';

import COPY from 'shared/meta/COPY';
import { CurrentStationArrivalShape } from './propTypes';

import Classes from './styles';


function CurrentStationArrival(props) {
  const {
    arrivalID,
    minutes,
    name,
    hexColor,
    color,
    delay,
    isLimited,
    length,
  } = props;

  const iconStyle = {
    backgroundColor: hexColor,
  };

  let leaving = `${minutes} minutes`;
  if (minutes === '1') leaving = `${minutes} minute`;
  if (minutes === COPY.leaving) leaving = 'Leaving now';

  const isDelayedContent = delay > 0
    ? (
      <span className={ Classes.delayed }>
        Delayed
      </span>
    )
    : null;

  const isLimitedName = isLimited
    ? 'Limited'
    : null;

  const carLength = `${length} car`;

  return (
    <div key={ arrivalID } className={ Classes.arrival }>
      <div className={ Classes.arrivalIcon } style={ iconStyle } title={ color } />
      <div className={ Classes.arrivalInformation }>
        <h3 className={ Classes.arrivalTitle }>
          { name } { isLimitedName }
        </h3>
        <div>
          { leaving } { isDelayedContent } – { carLength }
        </div>
      </div>
    </div>
  );
}
CurrentStationArrival.propTypes = CurrentStationArrivalShape;

export default CurrentStationArrival;
