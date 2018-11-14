import crypto from 'crypto';

function arrivalsListParser(data) {
  return data.reduce((collection, location) => {
    const estimates = location.estimate.map((arrival, index) => {
      const nameHash = crypto.createHash('md5')
        .update(location.destination)
        .digest('hex')
        .slice(0, 7);

      const arrivalNumber = Number(index + 1)
        .toLocaleString('en-US', {
          minimumIntegerDigits: 2,
          useGrouping: false,
        });

      const arrivalID = `${location.abbreviation}${arrivalNumber}_${nameHash}`;

      return {
        arrivalID,
        name: location.destination,
        abbreviation: location.abbreviation,
        direction: arrival.direction,
        canBikesRide: Boolean(Number(arrival.bikeflag)),
        color: arrival.color,
        delay: Number(arrival.delay),
        hexColor: arrival.hexcolor,
        isLimited: Boolean(Number(location.limited)),
        length: Number(arrival.length),
        minutes: arrival.minutes,
        platform: arrival.platform,
      };
    });
    return collection.concat(estimates);
  }, []);
}

export default arrivalsListParser;
