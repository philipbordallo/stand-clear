/**
 * Collects Departures by the direction they are heading,
 * Sets the platforms that are in that direction,
 * And sorts the directions by their departure time
 *
 * @param {Object} data - Departures
 * @param {Object}
 */
function directionsParser(data) {
  // Collection departures by direction
  const directions = data.reduce((collection, departure) => {
    const directionKey = `${departure.direction.toLowerCase()}Bound`;
    const prevDirection = collection[directionKey];

    if (prevDirection) {
      return {
        ...collection,
        [directionKey]: {
          ...prevDirection,
          list: [
            ...prevDirection.list,
            departure,
          ],
          platforms: prevDirection.platforms.add(departure.platform),
        },
      };
    }

    return {
      ...collection,
      [directionKey]: {
        name: departure.direction,
        platforms: new Set([departure.platform]),
        list: [departure],
      },
    };
  }, {});

  // Sort directions by departure time
  return Object.keys(directions).reduce((collection, direction) => ({
    ...collection,
    [direction]: {
      ...directions[direction],
      list: directions[direction].list.slice().sort((a, b) => a.minutes - b.minutes),
    },
  }), {});
}

export default directionsParser;
