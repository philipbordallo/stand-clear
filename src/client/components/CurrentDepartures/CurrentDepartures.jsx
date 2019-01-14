import React from 'react';
import PT from 'prop-types';

import CurrentDeparture from 'components/CurrentDeparture';

import { CurrentDepartureShape } from 'components/CurrentDeparture/propTypes';

import Classes from './styles';


function CurrentDepartures(props) {
  const {
    name,
    platforms,
    list,
    groupBy,
    abbreviation,
  } = props;

  const renderDepartureItem = (departure) => {
    const { departureID } = departure;
    return (
      <CurrentDeparture
        key={ departureID }
        { ...departure }
      />
    );
  };

  // Add a word break where the slash is in the name
  const renderGroupName = (groupName) => {
    const slashIndex = groupName.indexOf('/');

    if (slashIndex !== -1) {
      const beforeSlash = groupName.slice(0, slashIndex + 1);
      const afterSlash = groupName.slice(slashIndex + 1);
      return (
        <React.Fragment>
          { beforeSlash }
          <wbr />
          { afterSlash }
        </React.Fragment>
      );
    }

    return groupName;
  };

  const groupName = renderGroupName(name);

  const titleContent = groupBy === 'platform'
    ? `Platform ${groupName}`
    : groupName;

  const plural = platforms.size > 1 ? 's' : '';

  const platformsContent = groupBy === 'platform'
    ? ''
    : (
      <span className={ Classes.subtitle }>
        <span className={ Classes.subtitlePlatform }>
          Platform{ plural }
        </span>
        <span className={ Classes.subtitlePlat }>
          Plat
        </span>
        &nbsp;
        <span>{ Array.from(platforms).join(', ') }</span>
      </span>
    );

  return (
    <div>
      <h2 className={ Classes.title }>
        <div className={ Classes.titleContainer }>
          { titleContent }
          { platformsContent }
          <span className={ Classes.abbreviation }>{ abbreviation }</span>
        </div>
      </h2>
      <div className={ Classes.container }>
        { list.map(renderDepartureItem) }
      </div>
    </div>
  );
}
CurrentDepartures.propTypes = {
  abbreviation: PT.string.isRequired,
  groupBy: PT.oneOf([
    'direction',
    'name',
    'platform',
  ]).isRequired,
  name: PT.string.isRequired,
  list: PT.arrayOf(
    PT.shape(CurrentDepartureShape),
  ).isRequired,
  platforms: PT.instanceOf(Set).isRequired,
};

export default CurrentDepartures;
