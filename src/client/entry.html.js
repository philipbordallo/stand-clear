import template from './template.html';

import COPY from 'shared/meta/COPY';

const html = context => template({
  title: COPY.siteTitle,
  description: COPY.siteDescription,
  spritemap: context.webpack.assetsByChunkName.spritemap,
  script: context.htmlWebpackPlugin.files.js,
  stylesheet: context.htmlWebpackPlugin.files.css,
});

export default html;
