import sortArrivalsByMinutes from '../sortArrivalsByMinutes';

const TESTS = [
  [
    'Sort a train leaving now to the top',
    [
      { minutes: '1' },
      { minutes: '10' },
      { minutes: '20' },
      { minutes: 'Leaving' },
    ],
    [
      { minutes: 'Leaving' },
      { minutes: '1' },
      { minutes: '10' },
      { minutes: '20' },
    ]
  ],
  [
    'Sort out of order times in the correct order',
    [
      { minutes: '15' },
      { minutes: 'Leaving' },
      { minutes: '8' },
      { minutes: '2' },
    ],
    [
      { minutes: 'Leaving' },
      { minutes: '2' },
      { minutes: '8' },
      { minutes: '15' },
    ]
  ]
]

describe('sortArrivalsByMinutes should', () => {
  test.each(TESTS)('%s', (name, data, expectations) => {
    const results = data.sort(sortArrivalsByMinutes)

    expect(results).toEqual(expectations);
  });
})
