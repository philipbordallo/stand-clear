import API from 'api';

import logger from 'utilities/logger';
import advisoriesParser from 'parsers/advisoriesParser';


export const handler = (event, context, callback) => {
  logger(`Request => ${event.httpMethod} ${event.path}`);
  const endpoint = API.createEndpoint('bsa');

  API.request(endpoint, callback, advisoriesParser);
};
