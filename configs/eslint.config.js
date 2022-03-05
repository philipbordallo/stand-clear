module.exports = {
  env: {
    'jest': true
  },
  extends: [
    '@philipbordallo',
    '@philipbordallo/react'
  ],
  plugins: [
    'react-hooks',
  ],
  rules: {
    'react-hooks/rules-of-hooks': 'error',
  },
};
