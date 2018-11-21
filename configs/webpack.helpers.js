const path = require('path');
const { CONFIGS_PATH } = require('./paths');


const LOADER = {
  babel: {
    loader: 'babel-loader'
  },
  css: {
    loader: 'css-loader',
    options: {
      modules: true,
      importLoaders: 1,
      localIdentName: '[folder]__[local]__[hash:base64:5]'
    }
  },
  eslint: {
    loader: 'eslint-loader',
    options: {
      configFile: path.resolve(CONFIGS_PATH, 'eslint.config.js')
    }
  },
  handlebars: {
    loader: 'handlebars-loader'
  },
  postcss: {
    loader: 'postcss-loader',
    options: {
      config: {
        path: path.resolve(CONFIGS_PATH, 'postcss.config.js')
      }
    }
  },
  style: {
    loader: 'style-loader',
  }
};

const DEFINE_ENV = {
  'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
};

const STATS = {
  assets: true,
  children: false,
  chunks: false,
  modules: false,
  timings: true
};

module.exports = {
  DEFINE_ENV,
  LOADER,
  STATS,
};
