/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

// // next.config.js
// const withPlugins = require('next-compose-plugins');
// const withCSS = require('@zeit/next-css');
// const withPresetEnv = require('postcss-preset-env');

// module.exports = withPlugins([
//   withCSS({
//     // CSS Modules configuration if needed
//     // cssModules: true,
//     // cssLoaderOptions: {
//     //   localIdentName: '[local]___[hash:base64:5]',
//     // },
//     postcssLoaderOptions: {
//       // Add PostCSS plugins here
//       plugins: [
//         withPresetEnv({
//           // Add your PostCSS preset-env configuration here if needed
//           stage: 3,
//           autoprefixer: true,
//         }),
//         // Add more PostCSS plugins if necessary
//         // ...
//       ],
//     },
//   }),
// ], {
//   reactStrictMode: true,
// });

// // const webpack = require('webpack');
// // const nextConfig = {
// //   reactStrictMode: true,
// //   webpack: (config, { buildId, dev, isServer, defaultLoaders }) => {
// //     // Add your webpack customizations here

// //     // For example, to handle JSON files using json-loader
// //     config.module.rules.push({
// //       test: /\.json$/,
// //       use: 'json-loader',
// //       type: 'javascript/auto',
// //     });

// //     // For handling images
// //     config.module.rules.push({
// //       test: /\.(png|jpe?g|gif|svg)$/i,
// //       use: [
// //         {
// //           loader: 'file-loader',
// //           options: {
// //             publicPath: '/_next/static/images/',
// //             outputPath: 'static/images/',
// //             name: '[name].[ext]',
// //           },
// //         },
// //       ],
// //     });

// //     // Return the modified webpack configuration
// //     return config;
// //   },
// // };

// // module.exports = nextConfig;
