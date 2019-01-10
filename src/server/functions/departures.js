import API from 'api';
import STATION_LIST from 'shared/meta/STATION_LIST';

import logger from 'utilities/logger';
import departuresParser from 'parsers/departuresParser';


export const handler = (event, context, callback) => {
  const stationAbbr = STATION_LIST.map(station => station.abbreviation.toLowerCase());
  const paths = event.path.split('/');
  const orig = paths[paths.length - 1];

  // Check if the orig is a valid station abbreviation
  // And it's not Oakland Airpot, which doesn't support etd
  if (orig !== 'oakl' && stationAbbr.includes(orig)) {
    logger(`Request => ${event.httpMethod} ${event.path}`);
    const endpoint = API.createEndpoint('etd', { orig });

    API.request(endpoint, callback, departuresParser);
  }
  else {
    logger(`Request => ${event.httpMethod} ${event.path} NOT FOUND`);
    callback(null, {
      statusCode: 404,
      headers: API.defaultHeaders,
      body: API.serializer({ error: 'Not a valid station' }),
    });
  }
};
