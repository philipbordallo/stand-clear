const path = require('path');

const cssnano = require('cssnano');
const presetENV = require('postcss-preset-env');
const simpleVars = require('postcss-simple-vars');
const fontSmoothing = require('postcss-font-smoothing');
const fontWeights = require('postcss-font-weights');

const { CLIENT_PATH } = require('./paths');

module.exports = (loader) => {
  // Get tokens to auto reload
  const tokens = require.resolve('./postcss.tokens');
  loader.addDependency(tokens);
  delete require.cache[tokens];

  const setSimpleVars = simpleVars({
    variables() {
      return require(tokens); // eslint-disable-line global-require
    },
  });

  return [
    presetENV({
      autoprefixer: {
        grid: true,
        cascade: false,
      },
      stage: 3,
      insertBefore: {
        'media-query-ranges': setSimpleVars,
      },
      features: {
        'nesting-rules': true,
        'custom-properties': {
          importFrom: path.resolve(CLIENT_PATH, 'css', 'custom-properties.css'),
        },
        'any-link-pseudo-class': true,
        'system-ui-font-family': true,
      },
    }),
    fontSmoothing(),
    fontWeights(),
    cssnano({ // also handled by optimize-css-assets-webpack-plugin
      preset: ['default', {
        normalizeWhitespace: false,
      }],
    }),
  ];
};
