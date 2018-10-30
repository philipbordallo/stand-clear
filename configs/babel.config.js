module.exports = () => {
  const presets = [
    ['@babel/preset-env', { useBuiltIns: 'usage' }],
    '@babel/preset-react'
  ];

  const plugins = [
    '@babel/proposal-object-rest-spread'
  ];

  if (process.env.NODE_ENV === 'development') {
    plugins.push('react-hot-loader/babel');
  }

  return {
    presets,
    plugins
  };
};
