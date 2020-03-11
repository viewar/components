module.exports = {
  components:    './src/components/**/*.js?',
  webpackConfig: Object.assign({}, require('@viewar/webpack'), {
    /* Custom config options */
  }),
};
