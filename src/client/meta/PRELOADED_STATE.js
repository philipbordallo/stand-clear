const PRELOADED_STATE = {
  navigation: [
    {
      key: 'station-list',
      to: '/',
      name: 'Stations',
      icon: 'location',
      hasNotification: false,
    },
    {
      key: 'station',
      to: '/station/19th',
      name: 'Departures',
      icon: 'subway',
      hasNotification: false,
    },
    {
      key: 'advisories',
      to: '/advisories',
      name: 'Advisories',
      icon: 'flag',
      hasNotification: false,
    },
    {
      key: 'settings',
      to: '/settings',
      name: 'Settings',
      icon: 'head',
      hasNotification: false,
    },
  ],
};

export default PRELOADED_STATE;
