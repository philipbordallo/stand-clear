import React from 'react';
import PT from 'prop-types';


import { withRouter } from 'react-router-dom';
import ReactRouterPT from 'propTypes/ReactRouterPT';

import NavigationLink from 'components/NavigationLink';

import Classes from './styles';


const NAV_LINKS = [
  {
    to: '/',
    name: 'Stations',
    icon: 'location',
  },
  {
    to: '/station/:station',
    name: 'Departures',
    icon: 'subway',
  },
  {
    to: '/advisories',
    name: 'Advisories',
    icon: 'flag',
  },
  {
    to: '/settings',
    name: 'Settings',
    icon: 'head',
  },
];

function Navigation(props) {
  const { match } = props;

  function renderNavLinks(link, index) {
    const { to, name, icon } = link;

    const url = to === '/station/:station'
      ? to.replace(':station', '19th')
      : to;

    const isCurrent = to === match.path;

    return (
      <NavigationLink
        key={ index }
        to={ url }
        isCurrent={ isCurrent }
        icon={ icon }
      >
        { name }
      </NavigationLink>
    );
  }

  return (
    <nav className={ Classes.root }>
      { NAV_LINKS.map(renderNavLinks) }
    </nav>
  );
}
Navigation.propTypes = {
  match: ReactRouterPT.match({
    station: PT.string,
  }).isRequired,
};

export default withRouter(Navigation);
