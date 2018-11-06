module.exports = {
  plugins: {
    'autoprefixer': {
      grid: true,
      cascade: false,
    },
    'postcss-preset-env': {
      autoprefixer: false,
      stage: 3,
      features: {
        'nesting-rules': true,
        'custom-media-queries': true,
        'system-ui-font-family': true
      },
    },
    'postcss-font-smoothing': {}
  },
};
