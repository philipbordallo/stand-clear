import qs from 'qs';
import superagent from 'superagent';

import logger from 'utilities/logger';

class API {
  static createEndpoint(command, queryArgs) {
    const query = qs.stringify({
      cmd: command,
      key: process.env.BART_API_KEY,
      json: 'y',
      ...queryArgs,
    });

    return `https://api.bart.gov/api/${command}.aspx?${query}`;
  }

  static serializer(data) {
    return JSON.stringify(data, (key, value) => {
      if (value instanceof Set || value instanceof Map) {
        return Array.from(value);
      }

      return value;
    });
  }

  static request(endpoint, callback, parser) {
    superagent.get(endpoint)
      .end((error, response) => {
        const { status: statusCode, body } = response;

        const key = new RegExp(process.env.BART_API_KEY, 'g');
        logger(`BARTAPI => ${statusCode} ${endpoint.replace(key, 'KEY')}`);

        if (error) {
          callback(error, null);
        }

        if (statusCode === 200) {
          const data = parser ? parser(body) : body;

          callback(null, {
            statusCode,
            headers: API.defaultHeaders,
            body: API.serializer(data),
          });
        }
        else {
          callback(statusCode, null);
        }
      });
  }
}
API.defaultHeaders = {
  'Allow': 'GET',
  'Content-Type': 'application/json',
};

export default API;
