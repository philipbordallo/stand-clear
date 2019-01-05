const { ROOT_PATH } = require('./paths');


const SETUP_FILES = ['<rootDir>/configs/jest.setup.js'];
const COVERAGE_PATH_IGNORE_PATTERNS = [
  '<rootDir>/node_modules/',
  '<rootDir>/dist/',
  '<rootDir>/configs/',
];

module.exports = {
  coverageReporters: ['text'],
  collectCoverageFrom: [
    '**/*.{js,jsx}',
    '!**/node_modules/**',
    '!/dist/**',
    '!/configs/**',
  ],
  rootDir: ROOT_PATH,
  verbose: true,
  projects: [
    {
      displayName: 'client',
      coveragePathIgnorePatterns: COVERAGE_PATH_IGNORE_PATTERNS,
      moduleFileExtensions: ['js', 'json', 'jsx', 'css'],
      modulePaths: [
        '<rootDir>/src/client/',
        '<rootDir>/src/',
      ],
      moduleNameMapper: {
        './styles': 'identity-obj-proxy',
      },
      rootDir: ROOT_PATH,
      roots: [
        '<rootDir>/src/client/',
      ],
      setupFiles: SETUP_FILES,
    },
    {
      displayName: 'server',
      coveragePathIgnorePatterns: COVERAGE_PATH_IGNORE_PATTERNS,
      moduleFileExtensions: ['js', 'json'],
      modulePaths: [
        '<rootDir>/src/server/',
        '<rootDir>/src/',
      ],
      rootDir: ROOT_PATH,
      roots: [
        '<rootDir>/src/server/',
      ],
      setupFiles: SETUP_FILES,
    },
  ],
};
