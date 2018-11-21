import { handler } from '../advisories';

describe('advisories Function should', () => {
  test('Be called once', () => {
    const mockCallback = jest.fn((error, data) => data);
    handler({ path: '/.netlify/functions/advisories', httpMethod: 'GET' }, null, mockCallback);

    expect(mockCallback.mock.calls.length).toBe(1);
  });
});
