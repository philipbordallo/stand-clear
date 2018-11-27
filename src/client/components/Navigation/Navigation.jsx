import React from 'react';
import PT from 'prop-types';


import { withRouter } from 'react-router-dom';
import ReactRouterPT from 'propTypes/ReactRouterPT';
import { useRedux } from 'hooks';

import NavigationLink from 'components/NavigationLink';

import Classes from './styles';


function Navigation(props) {
  const { match } = props;

  const [{ navigation }] = useRedux();

  function renderNavLinks(link) {
    const { name, ...rest } = link;

    const isCurrent = link.to === match.url;

    return (
      <NavigationLink
        isCurrent={ isCurrent }
        { ...rest }
      >
        { name }
      </NavigationLink>
    );
  }

  return (
    <nav className={ Classes.root }>
      { navigation.map(renderNavLinks) }
    </nav>
  );
}
Navigation.propTypes = {
  match: ReactRouterPT.match({
    station: PT.string,
  }).isRequired,
};

export default withRouter(Navigation);
