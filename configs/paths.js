const path = require('path');

const ROOT_PATH = path.resolve(__dirname, '..');
const CONFIGS_PATH = path.resolve(ROOT_PATH, 'configs');
const CLIENT_PATH = path.resolve(ROOT_PATH, 'src', 'client');
const SERVER_PATH = path.resolve(ROOT_PATH, 'src', 'server');
const DIST_PATH = path.resolve(ROOT_PATH, 'dist');

module.exports = {
  ROOT_PATH,
  CONFIGS_PATH,
  CLIENT_PATH,
  SERVER_PATH,
  DIST_PATH
};
