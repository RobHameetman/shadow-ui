// import { Configuration } from 'webpack';
// const createCompiler = require('@storybook/addon-docs/mdx-compiler-plugin');

// module.exports = async webpackConfig => {
//   const config = 'config' in webpackConfig
//     ? webpackConfig.config
//     : webpackConfig;

//   return {
//     ...config,
//     module: {
//       ...config.module,
//       rules: [
//         ...((config.module || {}).rules || []),
//         {
//           test: /\.(stories|story)\.mdx?$/,
//           loader: require.resolve('@storybook/source-loader'),
//           exclude: [/node_modules/],
//           enforce: 'pre',
//         },
//         {
//           test: /\.(ts|tsx)$/,
//           use: [
//             {
//               loader: require.resolve('ts-loader'),
//             },
//             // Optional
//             {
//               loader: require.resolve('react-docgen-typescript-loader'),
//             },
//           ],
//         },
//         // {
//         //   test: /\.(ts|tsx)$/,
//         //   use: [
//         //     {
//         //       loader: 'babel-loader',
//         //       options: {
//         //         presets: [
//         //           '@babel/preset-env',
//         //           '@babel/preset-typescript',
//         //         ],
//         //         plugins: [
//         //           ["transform-mdx", {
//         //             "pragma": "element"
//         //           }],
//         //         ]
//         //       }
//         //     },
//         //     // Optional
//         //     {
//         //       loader: require.resolve('react-docgen-typescript-loader'),
//         //     },
//         //   ],
//         // },
//         {
//           test: /\.(stories|story)\.mdx$/,
//           use: [
//             {
//               loader: 'babel-loader',
//               options: {
//                 presets: [
//                   '@babel/preset-env',
//                   '@babel/preset-typescript',
//                 ],
//                 plugins: [
//                   ['transform-mdx', {
//                     'pragma': 'element'
//                   }],
//                   '@babel/plugin-transform-runtime',
//                   '@babel/plugin-syntax-jsx',
//                   // 'transform-mdx',
//                   // '@babel/plugin-transform-react-jsx',
//                 ],
//               }
//             },
//             {
//               loader: '@mdx-js/loader',
//               options: {
//                 compilers: [createCompiler({})],
//               },
//             },
//           ]
//         }
//       ],
//     },
//     node: {
//       ...config.node,
//       fs: 'empty'
//     },
//     resolve: {
//       ...config.resolve,
//       extensions: [
//         ...((config.resolve || {}).extensions || []),
//         '.ts',
//         '.tsx',
//       ]
//     },
//   }
// };

// interface ConfigurationObject {
//   config?: Configuration;
// }

module.exports = async webpackConfig => {
  const config = ('config' in webpackConfig
    ? webpackConfig.config
    : webpackConfig);

  return {
    ...config,
    module: {
      ...config.module,
      rules: [
        ...((config.module || {}).rules || []),
        {
          test: /\preview.js?$/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env',
                '@babel/preset-react',
              ],
              plugins: [
                ['babel-plugin-bundled-import-meta']
              ]
            }
          }
        },
      ],
    },
  }
};
