import currentStationParser from '../currentStationParser';

import ARRIVALS_BART_API from '__fixtures__/ARRIVALS_BART_API.fixture';
import ARRIVALS_PARSED from '__fixtures__/ARRIVALS_PARSED.fixture';


const TESTS = [
  [
    'Return null if there is null data',
    null,
    null
  ],
  [
    'Return correctly parsed data',
    ARRIVALS_BART_API,
    ARRIVALS_PARSED
  ]
];

describe('currentStationParser should', () => {
  test.each(TESTS)('%s', (name, data, expectations) => {
    const results = currentStationParser(data);

    expect(results).toEqual(expectations);
  });
});
