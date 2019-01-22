import React from 'react';

import Link from 'components/Link';

import Classes from './styles';

function About() {
  return (
    <section className={ Classes.root }>
      <h2 className={ Classes.title }>
        About
      </h2>
      <p>
        Thanks to <Link to="http://sophiabai.design/" type="external">Sophia Bai</Link> for the icons and to <Link to="https://bart.gov/" type="external">BART</Link> for making their <Link to="https://api.bart.gov/" type="external">API</Link> open to the public.
      </p>
      <p>
        See something wrong or want to improve this site? Send a PR on <Link to="https://github.com/philipbordallo/stand-clear" type="external">GitHub</Link>.
      </p>
    </section>
  );
}

export default About;
