import crypto from 'crypto';

function departuresListParser(data) {
  return data.reduce((collection, location) => {
    const estimates = location.estimate.map((departure, index) => {
      const nameHash = crypto.createHash('md5')
        .update(location.destination)
        .digest('hex')
        .slice(0, 7);

      const departureNumber = Number(index + 1)
        .toLocaleString('en-US', {
          minimumIntegerDigits: 2,
          useGrouping: false,
        });

      const departureID = `${location.abbreviation}${departureNumber}_${nameHash}`;

      return {
        departureID,
        name: location.destination,
        abbreviation: location.abbreviation,
        direction: departure.direction,
        canBikesRide: Boolean(Number(departure.bikeflag)),
        color: departure.color,
        delay: Number(departure.delay),
        hexColor: departure.hexcolor,
        isLimited: Boolean(Number(location.limited)),
        length: Number(departure.length),
        minutes: departure.minutes,
        platform: departure.platform,
      };
    });
    return collection.concat(estimates);
  }, []);
}

export default departuresListParser;
