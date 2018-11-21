import { handler } from '../arrivals';

describe('arrivals Function should', () => {
  test('Be called once', () => {
    const mockCallback = jest.fn((error, data) => data);
    handler({ path: '/.netlify/functions/arrivals/powl', httpMethod: 'GET' }, null, mockCallback);
    handler({ path: '/.netlify/functions/arrivals/nope', httpMethod: 'GET' }, null, mockCallback);

    expect(mockCallback.mock.calls.length).toBe(2);
  });
});
