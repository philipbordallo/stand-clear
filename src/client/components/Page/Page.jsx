import React from 'react';
import PT from 'prop-types';

import Classes from './styles';

function Page(props) {
  const { children, title } = props;

  return (
    <main className={ Classes.root }>
      <h1 className={ Classes.title }>{ title }</h1>
      { children }
    </main>
  );
}
Page.propTypes = {
  children: PT.node,
  title: PT.string.isRequired,
};
Page.defaultProps = {
  children: '',
};


export default Page;
