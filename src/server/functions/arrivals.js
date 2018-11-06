import API from 'api';
import STATION_ABBR from 'shared/meta/STATION_ABBR';

import logger from 'utilities/logger';
import currentStationParser from 'parsers/currentStationParser';


export const handler = (event, context, callback) => {
  const paths = event.path.split('/');
  const orig = paths[paths.length - 1];

  // Check if the orig is a valid station abbrevation
  // And it's not Oakland Airpot, which doesn't support etd
  if (orig !== 'oakl' && STATION_ABBR.includes(orig)) {
    logger(`Request => ${event.httpMethod} ${event.path}`);
    const endpoint = API.createEndpoint('etd', { orig });

    API.request(endpoint, callback, currentStationParser);
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
