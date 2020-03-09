const path = require('path');
// const webpackMerge = require('webpack-merge');
const loaderUtils = require('loader-utils')
const ViewArWebpack = require('@viewar/webpack');

const { PATHS, REGEXPS } = require('@viewar/webpack/src/constants')
// import webpackMerge from 'webpack-merge';
// import ViewArWebpack from '@viewar/webpack';

module.exports = {
  stories: ['../stories/**/*.stories.js', '../src/components/**/*.story.js'],
  addons: ['@storybook/addon-actions', '@storybook/addon-links'],
  webpackFinal: async (storybookWebpack, { configType }) => {
    // configType = DEVELOPMENT | PRODUCTION
    // const webpackMerged = webpackMerge(storybookWebpack, ViewArWebpack(configType.toLowerCase()))
    // webpackMerged.entry = storybookWebpack.entry

    // return webpackMerged
    storybookWebpack.module.rules.push({
      test: /\.s?css$/,
      use:  [
        {
          loader:  'style-loader',
          options: {
            injectType: 'singletonStyleTag',
          },
        },
        {
          loader:  'css-loader',
          options: {
            importLoaders: 1,
            modules:       {
              // development - prefix css classnames of @viewar modules
              // which are compiled at runtime - f.e. @viewar/components/dist/sass/viewar-styles
              // TODO: production - use hash
              // localIdentName: env === 'production' ? '[hash:base64:5]' : null,
              getLocalIdent: (context, localIdentName, localName, options) => {
                const isViewar = ~context.resourcePath.indexOf('@viewar')

                let name = `[name]-${localName}`
                name = (isViewar ? 'viewar-' : '') + name
                return loaderUtils.interpolateName(context, name, options)
              },
            },
          },
        },
        {
          loader:  'postcss-loader',
          options: {
            ident:   'postcss',
            plugins: (loader) => [ require('postcss-preset-env')() ],
          },
        },
        {
          loader: 'sass-loader',
          query:  {
            sourceMap:   true,
            sassOptions: {
              includePaths: [
                './sass', // default viewar structure
                `${path.basename(PATHS.src)}/sass`,
                './css', // ! compatibility with old setting
                // enables `@import 'viewar-styles'`
                // TODO: ? use sass-resource-loader
                PATHS.componentSass,
              ],
            },
          },
        },
      ],
    })

    return storybookWebpack
  }
};
