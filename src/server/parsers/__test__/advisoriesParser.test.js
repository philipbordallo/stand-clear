import advisoriesParser from '../advisoriesParser';

import ADVISORIES_BART_API from '__fixtures__/ADVISORIES_BART_API.fixture';
import ADVISORIES_PARSED from '__fixtures__/ADVISORIES_PARSED.fixture';


const TESTS = [
  [
    'Return null data if empty data is given',
    {},
    null
  ],
  [
    'Return correct data if data is given',
    ADVISORIES_BART_API,
    ADVISORIES_PARSED,
  ]
];

describe('advisoriesParser should', () => {
  test.each(TESTS)('%s', (name, data, expectations) => {
    const results = advisoriesParser(data);

    expect(results).toEqual(expectations);
  });
});
