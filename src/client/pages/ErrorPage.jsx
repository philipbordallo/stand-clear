import React from 'react';
import PT from 'prop-types';

import Page from 'components/Page';

function ErrorPage(props) {
  const { title, message } = props;
  return (
    <Page title={ title }>
      <p>{ message }</p>
    </Page>
  );
}
ErrorPage.propTypes = {
  title: PT.string,
  message: PT.string,
};
ErrorPage.defaultProps = {
  title: '',
  message: '',
};

export default ErrorPage;
