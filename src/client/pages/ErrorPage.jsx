import React from 'react';
import PT from 'prop-types';

import Page from 'components/Page';

function ErrorPage(props) {
  const { title, message } = props;
  return (
    <Page title={ String(title) }>
      <p>{ message }</p>
    </Page>
  );
}
ErrorPage.propTypes = {
  title: PT.oneOfType([
    PT.string,
    PT.number,
  ]),
  message: PT.string,
};
ErrorPage.defaultProps = {
  title: '',
  message: '',
};

export default ErrorPage;
