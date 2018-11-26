import { handler } from '../departures';

describe('departures Function should', () => {
  test('Be called once', () => {
    const mockCallback = jest.fn((error, data) => data);
    handler({ path: '/.netlify/functions/departures/powl', httpMethod: 'GET' }, null, mockCallback);
    handler({ path: '/.netlify/functions/departures/nope', httpMethod: 'GET' }, null, mockCallback);

    expect(mockCallback.mock.calls.length).toBe(2);
  });
});
