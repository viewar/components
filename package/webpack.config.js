// webpack.config.js
const path = require('path');
// const webpack = require('webpack');
// const merge = require('webpack-merge');
const getConfigViewar = require('@viewar/webpack');

const packageIndex = path.join(__dirname, '..', 'src', 'components');
const packageDest = path.join(__dirname, '..', 'dist');

module.exports = (env) => {
  const config = getConfigViewar('production');

  // const config = merge(configViewar, {

  //   // * do not bundle react
  //   externals: {
  //     react:       'React',
  //     'react-dom': 'ReactDOM',
  //   },
  // });

  config.externals = {
    react:       'umd React',
    'react-dom': 'umd ReactDOM',
  };

  // * remove split-chunk settings
  config.optimization = {};

  config.output = {
    path:          packageDest,
    // chunkFilename: '[name].js',
    filename:      'index.js',
    libraryTarget: 'umd',
  };

  config.entry = {
    // remove polyfill in entries
    index: packageIndex,
  };

  const rulesBak = config.module.rules;

  rulesBak[1].use[1].options.modules = {
    localIdentName: 'viewar-[folder]-[local]',
  };

  config.module.rules = [
    {
      test:    /\.(js|jsx)$/,
      exclude: /node_modules/,
      use:     [ 'babel-loader' ],
    },
    { ...rulesBak[1] }, // style loaders
    // { ...rulesBak[2] },
    {
      test:  /\.(eot|ttf|otf|woff2?)(\?v=\d+\.\d+\.\d+)?|png|jpe?g|svg|gif|ico|mp4$/,
      use:  [{
        loader:  'url-loader',
        options: {
          // limit:  8192, // 8192 byte = 1MB
        },
      }],
    },

  ];

  return config;
};
