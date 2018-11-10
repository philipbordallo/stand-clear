import template from './template.html';

const html = context => template({
  title: 'stand-clear',
  description: 'BART Station Arrivals',
  spritemap: context.webpack.assetsByChunkName.spritemap,
  script: context.htmlWebpackPlugin.files.js,
  stylesheet: context.htmlWebpackPlugin.files.css,
});

export default html;
