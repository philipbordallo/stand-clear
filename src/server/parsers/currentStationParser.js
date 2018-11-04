import arrivalsListParser from 'parsers/arrivalsListParser';
import directionsParser from 'parsers/directionsParser';

function currentStationParser(data) {
  if (data && data.root && data.root.station.length > 0) {
    const currentStation = data.root.station[0];

    const list = arrivalsListParser(currentStation.etd);
    const arrivals = directionsParser(list);

    return {
      abbreviation: currentStation.abbr,
      name: currentStation.name,
      date: data.root.date,
      time: data.root.time,
      arrivals,
    };
  }

  return null;
}

export default currentStationParser;
