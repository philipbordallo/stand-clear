import React from 'react';

import COPY from 'shared/meta/COPY';
import { CurrentDepartureShape } from './propTypes';

import Classes from './styles';


function CurrentDeparture(props) {
  const {
    departureID,
    minutes,
    name,
    hexColor,
    color,
    delay,
    length,
  } = props;

  const iconStyle = {
    backgroundColor: hexColor,
  };

  let departureTime = `${minutes} minutes`;
  if (minutes === 1) departureTime = `${minutes} minute`;
  if (minutes === 0) departureTime = COPY.leaving;

  const leavingContent = minutes === 0
    ? (
      <div className={ Classes.leaving }>
        <div className={ Classes.leavingUnderline } />
      </div>
    )
    : null;

  const departureTimeContent = (
    <span className={ Classes.departureTime }>
      { departureTime }
      { leavingContent }
    </span>
  );

  const isDelayedContent = delay > 0
    ? (
      <span className={ Classes.delayed }>
        Delayed
      </span>
    )
    : null;

  const carLength = `${length} car`;

  return (
    <div key={ departureID } className={ Classes.root }>
      <div className={ Classes.icon } style={ iconStyle } title={ color } />
      <div className={ Classes.information }>
        <h3 className={ Classes.title }>
          { name }
        </h3>
        <div>
          { departureTimeContent } { isDelayedContent } – { carLength }
        </div>
      </div>
    </div>
  );
}
CurrentDeparture.propTypes = CurrentDepartureShape;

export default CurrentDeparture;
