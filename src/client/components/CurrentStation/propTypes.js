import PT from 'prop-types';

import { CurrentArrivalShape } from 'components/CurrentArrival/propTypes';

export const DirectionPT = PT.shape({
  name: PT.string.isRequired,
  platforms: PT.arrayOf(
    PT.string,
  ).isRequired,
  list: PT.arrayOf(
    PT.shape(CurrentArrivalShape),
  ),
});
