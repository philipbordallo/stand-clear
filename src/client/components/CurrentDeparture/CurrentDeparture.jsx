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

  let iconClassNames = Classes.icon;
  if (minutes === 0) iconClassNames += ` ${Classes.iconLeaving}`;

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
      <div className={ iconClassNames } style={ iconStyle } title={ color } />
      <div className={ Classes.information }>
        <h3 className={ Classes.title }>
          { name }
        </h3>
        <div>
          { departureTime } { isDelayedContent } – { carLength }
        </div>
      </div>
    </div>
  );
}
CurrentDeparture.propTypes = CurrentDepartureShape;

export default CurrentDeparture;
