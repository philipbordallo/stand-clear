import API from 'api';
import advisoriesParser from 'parsers/advisoriesParser';

export const handler = (event, context, callback) => {
  const endpoint = API.createEndpoint('bsa');

  API.request(endpoint, callback, advisoriesParser);
};
