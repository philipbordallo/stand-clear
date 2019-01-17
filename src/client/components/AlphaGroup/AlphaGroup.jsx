import React from 'react';
import PT from 'prop-types';

import Classes from './styles';


function AlphaGroup(props) {
  const { title, items, renderer } = props;

  return (
    <div className={ Classes.root }>
      <h2 className={ Classes.title }>{ title }</h2>
      { items.map(renderer) }
    </div>
  );
}
AlphaGroup.propTypes = {
  title: PT.string.isRequired,
  items: PT.arrayOf(
    PT.objectOf(
      PT.oneOfType([
        PT.string,
        PT.number,
      ]),
    ),
  ).isRequired,
  renderer: PT.func.isRequired,
};

export default AlphaGroup;
