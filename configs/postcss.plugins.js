const autoprefixer = require('autoprefixer');
const presetENV = require('postcss-preset-env');
const simpleVars = require('postcss-simple-vars');
const fontSmoothing = require('postcss-font-smoothing');


module.exports = (loader) => {
  // Get tokens to auto reload
  const tokens = require.resolve('./postcss.tokens');
  loader.addDependency(tokens);
  delete require.cache[tokens];

  return [
    autoprefixer({
      grid: true,
      cascade: false,
    }),

    simpleVars({
      variables() {
        return require(tokens);
      },
    }),

    presetENV({
      autoprefixer: false,
      stage: 3,
      features: {
        'nesting-rules': true,
        'custom-media-queries': true,
        'system-ui-font-family': true,
      },
    }),

    fontSmoothing(),
  ];
};
