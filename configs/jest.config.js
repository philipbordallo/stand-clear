const { ROOT_PATH } = require('./paths');

module.exports = {
  verbose: true,
  rootDir: ROOT_PATH,
  coverageReporters: [
    'text',
  ],
  coveragePathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/dist/',
    '<rootDir>/configs/',
  ],
  collectCoverageFrom: [
    '**/*.{js,jsx}',
    '!**/node_modules/**',
    '!/dist/**',
    '!/configs/**',
  ],
  moduleFileExtensions: ['js', 'json', 'jsx', 'css'],
  moduleNameMapper: {
    './styles': 'identity-obj-proxy'
  },
  modulePaths: [
    '<rootDir>/src/client/',
    '<rootDir>/src/server/',
    '<rootDir>/src/',
  ],
  setupFiles: [
    '<rootDir>/configs/jest.setup.js',
  ]
};
