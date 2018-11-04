import sortArrivalsByMinutes from 'utilities/sortArrivalsByMinutes';

/**
 * Collects Arrivals by the direction they are heading,
 * Sets the platforms that are in that direction,
 * And sorts the directions by their arrival time
 *
 * @param {Object} data - Arrivals
 * @param {Object}
 */
function directionsParser(data) {
  // Collection arrivals by direction
  const directions = data.reduce((collection, arrival) => {
    const directionKey = `${arrival.direction.toLowerCase()}Bound`;
    const prevDirection = collection[directionKey];

    if (prevDirection) {
      return {
        ...collection,
        [directionKey]: {
          ...prevDirection,
          list: [
            ...prevDirection.list,
            arrival,
          ],
          platforms: prevDirection.platforms.add(arrival.platform),
        },
      };
    }

    return {
      ...collection,
      [directionKey]: {
        name: arrival.direction,
        platforms: new Set([arrival.platform]),
        list: [arrival],
      },
    };
  }, {});

  // Sort directions by arrival time
  return Object.keys(directions).reduce((collection, direction) => ({
    ...collection,
    [direction]: {
      ...directions[direction],
      list: directions[direction].list.slice().sort(sortArrivalsByMinutes),
    },
  }), {});
}

export default directionsParser;
