var mockEndpoint;

function getArgs(endpoint) {
  if (endpoint === 'http://example.com') {
    return [null, { status: 200 }];
  }
  if (endpoint === 'http://example.com/500') {
    return ['error', { status: 500 }];
  }
  if (endpoint === 'http://example.com/404') {
    return [null, { status: 404 }];
  }
}

var Request = {
  get(endpoint) {
    mockEndpoint = endpoint;
    return this;
  },
  end: jest.fn().mockImplementation((callback) => {
    var args = getArgs(mockEndpoint);
    callback(args[0], args[1]);
  }),
};

module.exports = Request;
