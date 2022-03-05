import advisoriesParser from '../advisoriesParser';

import ADVISORIES_BART_API from '__fixtures__/ADVISORIES_BART_API.fixture';
import ADVISORIES_BART_API_EMPTY from '__fixtures__/ADVISORIES_BART_API_EMPTY.fixture';
import ADVISORIES_PARSED from '__fixtures__/ADVISORIES_PARSED.fixture';


const TESTS = [
  [
    'Return null data if empty data is given',
    {},
    null,
  ],
  [
    'Return correct data if data is given',
    ADVISORIES_BART_API,
    ADVISORIES_PARSED,
  ],
  [
    'Return correct data if there is no advisories',
    ADVISORIES_BART_API_EMPTY,
    {
      date: '06/26/2017',
      list: [
        {
          description: 'No delays reported.',
          type: 'INFO',
        },
      ],
      time: '11:08:00 AM PDT',
    },
  ],
];

describe('advisoriesParser should', () => {
  test.each(TESTS)('%s', (name, data, expectations) => {
    const results = advisoriesParser(data);

    expect(results).toEqual(expectations);
  });
});
