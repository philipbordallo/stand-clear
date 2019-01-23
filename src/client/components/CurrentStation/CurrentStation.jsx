import React, { useState, useEffect } from 'react';
import PT from 'prop-types';

import CurrentDepartures from 'components/CurrentDepartures';
import CurrentDeparturesPlaceholder from 'components/CurrentDeparturesPlaceholder';
import GroupToggle from 'components/GroupToggle';
import GroupToggleItem from 'components/GroupToggleItem';
import InformationCallout from 'components/InformationCallout';
import InformationCalloutPlaceholder from 'components/InformationCalloutPlaceholder';
import VisuallyHidden from 'components/VisuallyHidden';

import { CurrentDepartureShape } from 'components/CurrentDeparture/propTypes';

import Classes from './styles';


const GROUP_TOGGLE_ITEMS = [
  {
    value: 'direction',
    text: 'Direction',
  },
  {
    value: 'name',
    text: 'Name',
  },
  {
    value: 'platform',
    text: 'Platform',
  },
];

function CurrentStation(props) {
  const {
    abbreviation,
    date,
    hasLoaded,
    time,
    listGrouped,
    name,
    groupDepartures,
  } = props;

  const [showContent, setShowContent] = useState(false);
  const [groupBy, setGroupBy] = useState('direction');

  // If content hasn't finished loading after refresh, don't show it and instead show placeholders
  useEffect(() => {
    if (!hasLoaded) {
      setShowContent(false);
    }
  }, [hasLoaded]);

  const handleChange = (event) => {
    setGroupBy(event.target.value);
    groupDepartures(event.target.value);
  };

  // Once the placeholder transition has finshed, show content
  const handlePlaceholderTransition = () => {
    setShowContent(true);
  };

  const renderDepartures = (group) => {
    const currentGroup = listGrouped[group];

    return (
      <CurrentDepartures
        key={ group }
        name={ currentGroup.name }
        platforms={ currentGroup.platforms }
        list={ currentGroup.list }
        groupBy={ groupBy }
        abbreviation={ abbreviation }
      />
    );
  };

  const renderGroupToggleItem = (item) => {
    const { value, text } = item;

    return (
      <GroupToggleItem
        key={ value }
        onChange={ handleChange }
        name="groupBy"
        checked={ groupBy === value }
        value={ value }
      >
        <VisuallyHidden>Group Departures By</VisuallyHidden> { text }
      </GroupToggleItem>
    );
  };

  const departureContent = showContent
    ? Object.keys(listGrouped).map(renderDepartures)
    : (
      <CurrentDeparturesPlaceholder
        hide={ hasLoaded }
        onHide={ handlePlaceholderTransition }
      />
    );

  const informationCalloutContent = showContent
    ? (
      <InformationCallout>
        Accurate as of { time } on { date } for { name } Station.
      </InformationCallout>
    )
    : (<InformationCalloutPlaceholder hide={ hasLoaded } />);

  return (
    <div>
      <div className={ Classes.container }>
        <GroupToggle>
          { GROUP_TOGGLE_ITEMS.map(renderGroupToggleItem) }
        </GroupToggle>
      </div>
      { departureContent }
      { informationCalloutContent }
    </div>
  );
}
CurrentStation.propTypes = {
  groupDepartures: PT.func.isRequired,
  hasLoaded: PT.bool.isRequired,
  abbreviation: PT.string,
  date: PT.string,
  name: PT.string,
  time: PT.string,
  listGrouped: PT.objectOf(
    PT.shape({
      name: PT.string.isRequired,
      platforms: PT.instanceOf(Set).isRequired,
      list: PT.arrayOf(
        PT.shape(CurrentDepartureShape),
      ),
    }),
  ),
};
CurrentStation.defaultProps = {
  abbreviation: '',
  date: '',
  name: '',
  time: '',
  listGrouped: {},
};

export default CurrentStation;
