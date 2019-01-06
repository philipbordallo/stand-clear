/**
 * Collect stations by alphabet
 * @param {Object} accumulator - Accumulated state
 * @param {Object} station - Accumulated state
 * @returns {Object}
 */
function collectStationsByAlpha(accumulator, station) {
  const keyString = station.name
    .toUpperCase()
    .substring(0, 1);

  // For numbers use a #
  const key = Number.isNaN(Number(keyString))
    ? keyString
    : '#';

  if (accumulator[key] && accumulator[key].length > 0) {
    return {
      ...accumulator,
      [key]: accumulator[key].concat([station]),
    };
  }

  return {
    ...accumulator,
    [key]: [station],
  };
}

export default collectStationsByAlpha;
