import departuresListParser from 'parsers/departuresListParser';
import directionsParser from 'parsers/directionsParser';

function currentStationParser(data) {
  if (data && data.root && data.root.station.length > 0) {
    const currentStation = data.root.station[0];

    const list = currentStation.etd
      ? departuresListParser(currentStation.etd)
      : [];

    const departures = directionsParser(list);

    return {
      abbreviation: currentStation.abbr,
      name: currentStation.name,
      date: data.root.date,
      time: data.root.time,
      departures,
    };
  }

  return null;
}

export default currentStationParser;
