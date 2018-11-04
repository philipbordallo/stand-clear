import API from 'api';

export const handler = (event, context, callback) => {
  const endpoint = API.createEndpoint('bsa');

  API.request(endpoint, callback);
};
