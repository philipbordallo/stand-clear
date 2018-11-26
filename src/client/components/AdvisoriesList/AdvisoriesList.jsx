import React from 'react';
import PT from 'prop-types';

import Link from 'components/Link';
import Icon from 'components/Icon';
import InformationCallout from 'components/InformationCallout';

import Classes from './styles';

function AdvisoriesList(props) {
  const { date, time, list } = props;

  const renderAdvisory = (advisory, index) => {
    const isEmergency = advisory.type === 'EMERGENCY';
    const isDelay = advisory.type === 'DELAY';

    const iconType = isEmergency
      ? 'warning-filled'
      : 'warning-outline';

    const iconContent = isEmergency || isDelay
      ? (
        <Icon name={ iconType } className={ Classes.icon } />
      ) : null;

    let advisoryClassNames = Classes.advisory;
    if (isDelay) advisoryClassNames = Classes.delayAdvisory;
    if (isEmergency) advisoryClassNames = Classes.emergencyAdvisory;

    return (
      <div className={ advisoryClassNames } key={ index }>
        { iconContent }
        <p className={ Classes.description }>
          { advisory.description }
        </p>
      </div>
    );
  };

  return (
    <div>
      <p>
        { date } { time }
      </p>
      <div>
        { list.map(renderAdvisory) }
      </div>
      <InformationCallout>
        For more inforamtion check <Link to="https://twitter.com/SFBARTalert" type="external">@SFBARTalert</Link>.
      </InformationCallout>
    </div>
  );
}
AdvisoriesList.propTypes = {
  date: PT.string.isRequired,
  time: PT.string.isRequired,
  list: PT.arrayOf(
    PT.shape({
      description: PT.string,
      type: PT.oneOf([
        'INFO',
        'DELAY',
        'EMERGENCY',
      ]),
    }),
  ).isRequired,
};

export default AdvisoriesList;
