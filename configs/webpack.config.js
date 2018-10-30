const webpack = require('webpack');
const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

const { LOADER, RESOLVER, ROOT_PATH, APP_PATH, DIST_PATH, DEFINE_ENV } = require('./webpack.helpers');


const RULES = {
  jsx: {
    test: /\.(js|jsx)$/,
    exclude: /node_modules/,
    use: [
      LOADER.babel,
      LOADER.eslint
    ]
  },
  css: {
    test: /\.css$/,
    use: [
      LOADER.style,
      LOADER.css,
      LOADER.postcss
    ]
  },
  html: {
    test: /\.html$/,
    use: [
      LOADER.handlebars
    ]
  }
};

const DEV_SERVER = {
  compress: true,
  contentBase: DIST_PATH,
  historyApiFallback: true,
  host: 'localhost',
  hot: true,
  inline: true,
  port: 3000,
  stats: {
    assets: true,
    children: false,
    chunks: false,
    modules: false,
    timings: true
  }
};

module.exports = {
  mode: process.env.NODE_ENV,
  entry: {
    app: path.resolve(APP_PATH, 'entry.js')
  },
  output: {
    path: DIST_PATH,
    filename: '[name].bundle.js',
    publicPath: `/`
  },
  devServer: DEV_SERVER,
  module: {
    rules: [
      RULES.jsx,
      RULES.css,
      RULES.html
    ]
  },
  resolve: RESOLVER,
  plugins: [
    new webpack.DefinePlugin(DEFINE_ENV),
    new webpack.SourceMapDevToolPlugin({
      test: /\.(js|jsx)$/,
      filename: '[file].map'
    }),
    new HTMLWebpackPlugin({
      template: path.resolve(APP_PATH, 'entry.html.js'),
      inject: false,
      minify: false
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
  ]
};
