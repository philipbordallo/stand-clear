import React from 'react';
import PT from 'prop-types';

import Link from 'components/Link';
import Icon from 'components/Icon';

import Classes from './styles';


function NavigationLink(props) {
  const {
    to,
    children,
    isCurrent,
    icon,
  } = props;

  let classNames = Classes.root;
  if (isCurrent) classNames += ` ${Classes.active}`;

  const iconName = isCurrent
    ? `${icon}-filled`
    : `${icon}-outline`;

  return (
    <Link to={ to } className={ classNames }>
      <Icon name={ iconName } size="36" />

      { children }
    </Link>
  );
}
NavigationLink.propTypes = {
  icon: PT.string.isRequired,
  to: PT.string.isRequired,
  children: PT.node.isRequired,
  isCurrent: PT.bool.isRequired,
};

export default NavigationLink;
