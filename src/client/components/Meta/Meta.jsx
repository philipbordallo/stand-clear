import React, { memo } from 'react';
import PT from 'prop-types';

import Helmet from 'react-helmet';

import COPY from 'shared/meta/COPY';


function Meta(props) {
  const { title } = props;

  const fulltitle = !title
    ? COPY.siteTitle
    : `${title} – ${COPY.siteTitle}`;

  return (
    <Helmet>
      <title>
        { fulltitle }
      </title>
    </Helmet>
  );
}
Meta.propTypes = {
  title: PT.string,
};
Meta.defaultProps = {
  title: '',
};

export default memo(Meta);
