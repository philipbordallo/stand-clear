import API from 'api';
import STATION_ABBR from 'shared/meta/STATION_ABBR';

export const handler = (event, context, callback) => {
  const paths = event.path.split('/');
  const orig = paths[paths.length - 1];

  if (STATION_ABBR.includes(orig)) {
    const endpoint = API.createEndpoint('etd', { orig });

    API.request(endpoint, callback);
  }
  else {
    callback(null, {
      statusCode: 404,
      headers: API.defaultHeaders,
      body: API.serializer({ error: 'Not a valid station abbreviation' }),
    });
  }
};
