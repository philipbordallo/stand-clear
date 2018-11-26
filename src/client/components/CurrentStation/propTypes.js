import PT from 'prop-types';

import { CurrentDepartureShape } from 'components/CurrentDeparture/propTypes';

export const DirectionPT = PT.shape({
  name: PT.string.isRequired,
  platforms: PT.arrayOf(
    PT.string,
  ).isRequired,
  list: PT.arrayOf(
    PT.shape(CurrentDepartureShape),
  ),
});
