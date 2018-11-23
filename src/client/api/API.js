function handleResponse(response) {
  if (response.ok) {
    return response.json();
  }

  // eslint-disable-next-line prefer-promise-reject-errors
  return Promise.reject({
    name: response.status,
    message: response.statusText,
  });
}

const API = {
  getAdvisories() {
    return fetch('/.netlify/functions/advisories')
      .then(handleResponse);
  },

  getStationArrivals(station) {
    return fetch(`/.netlify/functions/arrivals/${station}`)
      .then(handleResponse);
  }
};

export default API;
