import departuresListParser from 'parsers/departuresListParser';


function departuresParser(data) {
  if (data && data.root && data.root.station.length > 0) {
    const currentStation = data.root.station[0];

    const list = currentStation.etd
      ? departuresListParser(currentStation.etd)
      : [];

    return {
      abbreviation: currentStation.abbr,
      name: currentStation.name,
      date: data.root.date,
      time: data.root.time,
      list,
    };
  }

  return null;
}

export default departuresParser;
