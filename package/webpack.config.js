// webpack.config.js
const path = require('path');
const configViewAr = require('@viewar/webpack');

const packageIndex = path.join(__dirname, '..', 'src', 'components', 'index.js');
const packageDest = path.join(__dirname, '..', 'dist');

module.exports = (env) => {
  const config = configViewAr(env);
  // modify config as you need
  config.entry = packageIndex;

  config.output = {
    path:          packageDest,
    chunkFilename: '[name].js',
    filename:      'index.js',
  };

  config.optimization = {
  };

  return config;
};
