const { ROOT_PATH } = require('./paths');

module.exports = {
  verbose: true,
  rootDir: ROOT_PATH,
  coverageReporters: [
    'text',
  ],
  coveragePathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/dist/'
  ],
  collectCoverageFrom: [
    '**/*.{js,jsx}',
    '!**/node_modules/**',
    '!**/dist/**',
  ],
  moduleFileExtensions: ['js', 'json', 'jsx', 'css'],
  moduleNameMapper: {
    './styles': 'identity-obj-proxy'
  },
  modulePaths: [
    '<rootDir>/src/client/',
    '<rootDir>/src/server/',
    '<rootDir>/src/',
  ]
};
