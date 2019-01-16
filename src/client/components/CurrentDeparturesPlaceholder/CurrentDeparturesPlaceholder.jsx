import React from 'react';
import PT from 'prop-types';

import CurrentDeparturePlaceholder from 'components/CurrentDeparturePlaceholder';

import noop from 'utilities/noop';
import Classes from './styles';


const LIST = [4, 3, 2, 5, 6];

function CurrentDeparturesPlaceholder(props) {
  const { hide, onHide } = props;

  const renderList = (number, index) => (
    <CurrentDeparturePlaceholder maxWidth={ 20 * number } key={ index } />
  );

  let rootClassName = Classes.root;
  if (hide) rootClassName += ` ${Classes.hidePlaceholder}`;

  return (
    <div className={ rootClassName } onTransitionEnd={ onHide }>
      <div className={ Classes.title }>
        <div className={ Classes.titleContainer }>
          <span className={ Classes.titlePlaceholder } />
          <span className={ Classes.abbreviation }>&nbsp;&nbsp;&nbsp;&nbsp;</span>
        </div>
      </div>
      <div className={ Classes.container }>
        { LIST.map(renderList) }
      </div>
    </div>
  );
}
CurrentDeparturesPlaceholder.propTypes = {
  hide: PT.bool,
  onHide: PT.func,
};
CurrentDeparturesPlaceholder.defaultProps = {
  hide: false,
  onHide: noop,
};

export default CurrentDeparturesPlaceholder;
