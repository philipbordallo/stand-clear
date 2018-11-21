import API from '../index';

function mockParser(data) {
  return data;
}

describe('API should', () => {
  beforeAll(() => {
    delete process.env.BART_API_KEY;
    process.env.BART_API_KEY = 'KEY';
  });

  test('Returns a correct API endpoint string', () => {
    const results = API.createEndpoint('bsa');
    const expectations = 'https://api.bart.gov/api/bsa.aspx?cmd=bsa&key=KEY&json=y';

    expect(results).toEqual(expectations);
  });

  test('Be able to request an endpoint', () => {
    const mockCallback = jest.fn((error, data) => data);
    API.request('http://example.com', mockCallback, mockParser);
    API.request('http://example.com/500', mockCallback);
    API.request('http://example.com/404', mockCallback);
    API.request('http://example.com', mockCallback);

    expect(mockCallback.mock.calls.length).toBe(4);
    expect(mockCallback.mock.results[0].value.statusCode).toEqual(200);
    expect(mockCallback.mock.results[1].value.statusCode).toEqual(500);
    expect(mockCallback.mock.results[2].value.statusCode).toEqual(404);
    expect(mockCallback.mock.results[3].value.statusCode).toEqual(200);
  });

  test('Correctly serialize data', () => {
    const results = API.serializer({
      this: 1,
      that: 'two',
      other: new Set([3]),
    });

    const expectations = JSON.stringify({
      this: 1,
      that: 'two',
      other: [3],
    });

    expect(results).toEqual(expectations);
  })
})
