/**
 * Collects Departures by a group key (direction, name)
 * Sets the platforms that correspond to that key
 * And if they key is direction, sort by the departure time
 *
 * @param   {Object}  data - Departures
 * @param   {String}  key - What to group by and set as the collection key
 * @returns {Object}
 */
function departuresGroupBy(data, key) {
  // Collection departures by direction
  const departures = data.reduce((collection, departure) => {
    const collectionKey = departure[key];
    const prevDirection = collection[collectionKey];

    if (prevDirection) {
      return {
        ...collection,
        [collectionKey]: {
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
      [collectionKey]: {
        name: collectionKey,
        platforms: new Set([departure.platform]),
        list: [departure],
      },
    };
  }, {});

  // If grouping by direction, sort by departure time
  if (key === 'direction') {
    return Object.keys(departures).reduce((collection, item) => ({
      ...collection,
      [item]: {
        ...departures[item],
        list: departures[item].list.slice().sort((a, b) => a.minutes - b.minutes),
      },
    }), {});
  }

  return departures;
}

export default departuresGroupBy;
