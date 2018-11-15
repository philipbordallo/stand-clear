import React from 'react';

import COPY from 'shared/meta/COPY';
import { CurrentArrivalShape } from './propTypes';

import Classes from './styles';


function CurrentArrival(props) {
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

  const isLeavingNow = minutes === COPY.leaving;

  let leaving = `${minutes} minutes`;
  if (minutes === '1') leaving = `${minutes} minute`;
  if (isLeavingNow) leaving = 'Leaving now';

  let iconClassNames = Classes.icon;
  if (isLeavingNow) iconClassNames += ` ${Classes.iconLeaving}`;

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
    <div key={ arrivalID } className={ Classes.root }>
      <div className={ iconClassNames } style={ iconStyle } title={ color } />
      <div className={ Classes.information }>
        <h3 className={ Classes.title }>
          { name } { isLimitedName }
        </h3>
        <div>
          { leaving } { isDelayedContent } – { carLength }
        </div>
      </div>
    </div>
  );
}
CurrentArrival.propTypes = CurrentArrivalShape;

export default CurrentArrival;
