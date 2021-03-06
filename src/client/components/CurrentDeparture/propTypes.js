import PT from 'prop-types';

export const CurrentDepartureShape = {
  departureID: PT.string.isRequired,
  name: PT.string.isRequired,
  abbreviation: PT.string.isRequired,
  direction: PT.oneOf(['North', 'South']).isRequired,
  canBikesRide: PT.bool.isRequired,
  color: PT.string.isRequired,
  delay: PT.number.isRequired,
  hexColor: PT.string.isRequired,
  isLimited: PT.bool.isRequired,
  length: PT.number.isRequired,
  minutes: PT.number.isRequired,
  platform: PT.string.isRequired,
};
