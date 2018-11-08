const path = require('path');

const ROOT_PATH = path.resolve(__dirname, '..');
const CONFIGS_PATH = path.resolve(ROOT_PATH, 'configs');
const CLIENT_PATH = path.resolve(ROOT_PATH, 'src', 'client');
const SERVER_PATH = path.resolve(ROOT_PATH, 'src', 'server');
const DIST_PATH = path.resolve(ROOT_PATH, 'dist');

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
  ROOT_PATH,
  CONFIGS_PATH,
  CLIENT_PATH,
  SERVER_PATH,
  DIST_PATH,
  LOADER,
  STATS,
};
