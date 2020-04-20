// const path = require('path');
// const createConfig = require('./webpack.config');

module.exports = {
  stories: ['./../packages/**/*.stories.mdx'],
  esDevServer: {
    nodeResolve: true,
    open: true,
  },
  // addons: [
  //   {
  //     name: '@storybook/preset-typescript',
  //     options: {
  //       tsLoaderOptions: {
  //         configFile: path.resolve(__dirname, './tsconfig.json'),
  //       },
  //       include: [path.resolve(__dirname)],
  //     },
  //   },
  //   '@storybook/addon-a11y',
  //   '@storybook/addon-actions',
  //   '@storybook/addon-knobs',
  //   '@storybook/addon-links',
  //   {
  //     name: '@storybook/addon-docs',
  //     options: {
  //       configureJSX: true
  //     }
  //   },
  // ],
  // webpackFinal: async config => createConfig(config),
};
