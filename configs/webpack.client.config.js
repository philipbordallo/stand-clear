const webpack = require('webpack');
const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCSSExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');

const {
  LOADER,
  CLIENT_PATH,
  DIST_PATH,
  ROOT_PATH,
  DEFINE_ENV,
  STATS,
} = require('./webpack.helpers');


const isDevelopment = process.env.NODE_ENV === 'development';
const isProduction = process.env.NODE_ENV === 'production';

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
      isDevelopment ? LOADER.style : MiniCSSExtractPlugin.loader,
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
  proxy: {
    '/.netlify/functions/': {
      target: 'http://localhost:9000',
      pathRewrite: { '^/.netlify/functions': '' },
    },
  },
  stats: STATS,
};

module.exports = {
  name: 'client',
  mode: process.env.NODE_ENV,
  entry: {
    app: path.resolve(CLIENT_PATH, 'entry.js')
  },
  output: {
    path: path.resolve(DIST_PATH, 'client'),
    filename: isProduction ? '[name].[hash].bundle.js' : '[name].bundle.js',
    publicPath: `/`
  },
  devServer: isDevelopment ? DEV_SERVER : undefined,
  module: {
    rules: [
      RULES.jsx,
      RULES.css,
      RULES.html
    ]
  },
  resolve: {
    alias: {
      shared: path.resolve(ROOT_PATH, 'src', 'shared'),
    },
    extensions: ['.js', '.jsx', '.css'],
    modules: [CLIENT_PATH, 'node_modules']
  },
  plugins: [
    new webpack.DefinePlugin(DEFINE_ENV),
    new webpack.SourceMapDevToolPlugin({
      test: /\.(js|jsx)$/,
      filename: '[file].map'
    }),
    new HTMLWebpackPlugin({
      template: path.resolve(CLIENT_PATH, 'entry.html.js'),
      inject: false,
      minify: false
    }),
    isProduction ? new MiniCSSExtractPlugin({
      filename: '[name].[contenthash].css'
    }) : null,
    isDevelopment ? new webpack.NamedModulesPlugin() : null,
    isDevelopment ? new webpack.HotModuleReplacementPlugin() : null,
  ].filter(Boolean),
  stats: STATS,
  optimization: {
    minimizer: [
      new TerserWebpackPlugin({
        sourceMap: true,
      }),
      new OptimizeCSSAssetsPlugin()
    ],
    splitChunks: {
      cacheGroups: {
        vendors: {
          name: 'vendors',
          test: /[\\/]node_modules[\\/].+(?<!css)$/,
          chunks: 'all'
        },
      },
    },
  },
};
