import departuresParser from '../departuresParser';

import DEPARTURES_BART_API from '__fixtures__/DEPARTURES_BART_API.fixture';
import DEPARTURES_BART_API_EMPTY from '__fixtures__/DEPARTURES_BART_API_EMPTY.fixture';
import DEPARTURES_PARSED from '__fixtures__/DEPARTURES_PARSED.fixture';


const TESTS = [
  [
    'Return null if there is null data',
    null,
    null,
  ],
  [
    'Return correctly parsed data',
    DEPARTURES_BART_API,
    DEPARTURES_PARSED,
  ],
  [
    'Return correctly empty data',
    DEPARTURES_BART_API_EMPTY,
    {
      abbreviation: 'POWL',
      list: [],
      date: '11/20/2018',
      name: 'Powell St.',
      time: '08:23:16 PM PST',
    },
  ],
];

describe('departuresParser should', () => {
  test.each(TESTS)('%s', (name, data, expectations) => {
    const results = departuresParser(data);

    expect(results).toEqual(expectations);
  });
});
