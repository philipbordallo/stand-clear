const webpack = require('webpack');
const path = require('path');

const {
  LOADER,
  SERVER_PATH,
  DIST_PATH,
  ROOT_PATH,
  DEFINE_ENV,
} = require('./webpack.helpers');

const RULES = {
  js: {
    test: /\.(js)$/,
    exclude: /node_modules/,
    use: [
      LOADER.babel,
      LOADER.eslint
    ]
  }
}

module.exports = {
  name: 'server',
  mode: process.env.NODE_ENV,
  entry: {
    advisories: path.resolve(SERVER_PATH, 'functions', 'advisories.js'),
    arrivals: path.resolve(SERVER_PATH, 'functions', 'arrivals.js'),
  },
  output: {
    path: path.resolve(DIST_PATH, 'server'),
    filename: '[name].js',
    libraryTarget: 'commonjs'
  },
  module: {
    rules: [
      RULES.js,
    ]
  },
  resolve: {
    alias: {
      shared: path.resolve(ROOT_PATH, 'src', 'shared'),
    },
    extensions: ['.js'],
    modules: [SERVER_PATH, 'node_modules']
  },
  plugins: [
    new webpack.DefinePlugin({
      ...DEFINE_ENV,
      'global.GENTLY': false // Fixes issue https://github.com/felixge/node-formidable/issues/337
    }),
  ]
}
