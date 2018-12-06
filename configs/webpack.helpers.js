const fs = require('fs');
const path = require('path');
const { CONFIGS_PATH, DIST_PATH } = require('./paths');

const plugins = require('./postcss.plugins');


const LOADER = {
  babel: {
    loader: 'babel-loader',
  },
  css: {
    loader: 'css-loader',
    options: {
      modules: true,
      importLoaders: 1,
      localIdentName: '[folder]__[local]__[hash:base64:5]',
    },
  },
  eslint: {
    loader: 'eslint-loader',
    options: {
      configFile: path.resolve(CONFIGS_PATH, 'eslint.config.js'),
    },
  },
  handlebars: {
    loader: 'handlebars-loader',
  },
  postcss: {
    loader: 'postcss-loader',
    options: {
      plugins
    },
  },
  style: {
    loader: 'style-loader',
  },
};

const DEFINE_ENV = {
  'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
};

const STATS = {
  assets: true,
  children: false,
  chunks: false,
  modules: false,
  timings: true,
};

const DEV_SERVER = {
  before(app, server) {
    console.log(server.allowedHosts.map(host => `~ https://${host}:${process.env.PORT}`).join('\n'), '\n');
  },
  allowedHosts: process.env.ALLOWED_HOSTS.split(','),
  compress: true,
  contentBase: DIST_PATH,
  historyApiFallback: true,
  host: '0.0.0.0',
  hot: true,
  https: {
    key: fs.readFileSync(process.env.SSL_KEY),
    cert: fs.readFileSync(process.env.SSL_CERT),
    ca: fs.readFileSync(process.env.SSL_CA),
  },
  inline: true,
  port: process.env.PORT,
  proxy: {
    '/.netlify/functions/': {
      target: 'http://localhost:9000',
      pathRewrite: { '^/.netlify/functions': '' },
    },
  },
  stats: STATS,
};

module.exports = {
  DEFINE_ENV,
  DEV_SERVER,
  LOADER,
  STATS,
};
