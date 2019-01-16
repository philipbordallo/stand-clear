import React from 'react';

import Link from 'components/Link';

import Classes from './styles';

function About() {
  return (
    <div className={ Classes.root }>
      <h2 className={ Classes.title }>
        About
      </h2>
      <p>
        Thanks to <Link to="http://sophiabai.design/" type="external">Sophia Bai</Link> for the icons.
      </p>
      <p>
        See something wrong or want to improve this site? Send a PR on <Link to="https://github.com/philipbordallo/stand-clear" type="external">GitHub</Link>.
      </p>
    </div>
  );
}

export default About;
