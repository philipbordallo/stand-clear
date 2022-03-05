/* eslint-disable camelcase */
export default {
  '?xml': {
    '@version': '1.0',
    '@encoding': 'utf-8',
  },
  'root': {
    '@id': '1',
    'uri': {
      '#cdata-section': 'http://api.bart.gov/api/bsa.aspx?cmd=bsa&json=y',
    },
    'date': '06/26/2017',
    'time': '11:08:00 AM PDT',
    'bsa': [
      {
        station: '',
        description: {
          '#cdata-section': 'No delays reported.',
        },
        sms_text: {
          '#cdata-section': 'No delays reported.',
        },
      },
    ],
    'message': '',
  },
};
