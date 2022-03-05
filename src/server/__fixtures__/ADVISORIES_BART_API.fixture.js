export default {
  '?xml': {
    '@encoding': 'utf-8',
    '@version': '1.0',
  },
  'root': {
    '@id': '1',
    'bsa': [
      {
        '@id': '176365',
        'description': {
          '#cdata-section': 'There is a 30-minute delay on the San Francisco Line in the Antioch direction due to an equipment problem on a train. ',
        },
        'expires': 'Thu Dec 31 2037 11:59 PM PST',
        'posted': 'Fri Nov 23 2018 04:54 PM PST',
        'sms_text': {
          '#cdata-section': '30 min delay on SF line in ANTC dir due to equip prob.',
        },
        'station': 'BART',
        'type': 'DELAY',
      },
    ],
    'date': '11/23/2018',
    'message': '',
    'time': '16:57:00 PM PST',
    'uri': {
      '#cdata-section': 'http://api.bart.gov/api/bsa.aspx?cmd=bsa&json=y',
    },
  },
};
