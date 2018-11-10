import React from 'react';
import PT from 'prop-types';

import ErrorPage from 'pages/ErrorPage';

class ErrorBoundary extends React.Component {
  // eslint-disable-next-line react/sort-comp
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: {},
    };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  render() {
    const { children } = this.props;
    const { hasError, error } = this.state;

    if (hasError) {
      return (
        <ErrorPage title={ error.name } message={ error.message } />
      );
    }

    return children;
  }
}
ErrorBoundary.propTypes = {
  children: PT.node.isRequired,
};

export default ErrorBoundary;
