import React from 'react';
import PT from 'prop-types';

import Navigation from 'components/Navigation';

import Classes from './styles';


function Page(props) {
  const { children, title } = props;

  return (
    <main className={ Classes.root }>
      <div className={ Classes.content }>
        <h1 className={ Classes.title }>{ title }</h1>
        { children }
      </div>
      <Navigation />
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
