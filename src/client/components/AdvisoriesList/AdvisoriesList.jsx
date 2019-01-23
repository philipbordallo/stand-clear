import React from 'react';
import PT from 'prop-types';

import Advisory from 'components/Advisory';
import Link from 'components/Link';
import InformationCallout from 'components/InformationCallout';

import Classes from './styles';


function AdvisoriesList(props) {
  const { date, time, list } = props;

  const renderAdvisory = (advisory, index) => (
    <Advisory key={ index } { ...advisory } />
  );

  return (
    <div>
      <div className={ Classes.container }>
        <p>
          { date } { time }
        </p>
        <div>
          { list.map(renderAdvisory) }
        </div>
      </div>
      <InformationCallout>
        For more information check <Link to="https://twitter.com/SFBARTalert" type="external">@SFBARTalert</Link>.
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
