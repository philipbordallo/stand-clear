const path = require('path');

const autoprefixer = require('autoprefixer');
const colormin = require('postcss-colormin').default;
const calc = require('postcss-calc');
const reduceInitial = require('postcss-reduce-initial');
const presetENV = require('postcss-preset-env');
const simpleVars = require('postcss-simple-vars');
const fontSmoothing = require('postcss-font-smoothing');

const { CLIENT_PATH } = require('./paths');

module.exports = (loader) => {
  // Get tokens to auto reload
  const tokens = require.resolve('./postcss.tokens');
  loader.addDependency(tokens);
  delete require.cache[tokens];

  return [
    presetENV({
      autoprefixer: false,
      stage: 3,
      features: {
        'nesting-rules': true,
        'custom-media-queries': true,
        'custom-properties': {
          importFrom: path.resolve(CLIENT_PATH, 'css', 'custom-properties.css'),
        },
        'any-link-pseudo-class': true,
        'system-ui-font-family': true,
      },
    }),

    simpleVars({
      variables() {
        return require(tokens);
      },
    }),

    fontSmoothing(),

    autoprefixer({
      grid: true,
      cascade: false,
    }),

    // cssnano handled by optimize-css-assets-webpack-plugin
    reduceInitial(),
    colormin(),
    calc(),
  ];
};
