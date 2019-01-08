import React, { useEffect } from 'react';
import PT from 'prop-types';

import ErrorBoundary from 'components/ErrorBoundary';
import Navigation from 'components/Navigation';

import { useRedux } from 'hooks';

import Classes from './styles';


function Page(props) {
  const { children, title } = props;

  const [, { getAdvisories }] = useRedux();

  useEffect(() => {
    getAdvisories();
  }, []);

  return (
    <ErrorBoundary>
      <main className={ Classes.root }>
        <div className={ Classes.content }>
          <h1 className={ Classes.title }>
            <div className={ Classes.titleContainer }>
              { title }
            </div>
          </h1>
          { children }
        </div>
        <Navigation />
      </main>
    </ErrorBoundary>
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
