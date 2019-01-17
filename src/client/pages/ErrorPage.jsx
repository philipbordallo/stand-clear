import React from 'react';
import PT from 'prop-types';

import ErrorMessage from 'components/ErrorMessage';
import Page from 'components/Page';

function ErrorPage(props) {
  const { title, message } = props;
  return (
    <Page title={ String(title) }>
      <ErrorMessage>
        <p>{ message }</p>
      </ErrorMessage>
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
