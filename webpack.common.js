// const HtmlWebpackPlugin = require('html-webpack-plugin');

// module.exports = {
//   entry: './index.js',
//   plugins: [
//     new HtmlWebpackPlugin({
//       template: './index.html',
//       favicon: `./src/assets/fav.png`,
//     }),
//   ],
//   module: {
//     rules: [
//       {
//         test: /\.html$/,
//         use: ['html-loader'],
//       },
//       {
//         test: /\.(svg|png|jpg|jpeg|gif)$/i,
//         use: {
//           loader: 'file-loader',
//           options: {
//             esModule: false,
//             name: '[name].[hash].[ext]',
//             outputPath: 'imgs',
//           },
//         },
//       },
//     ],
//   },
// };


const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    filename: 'bundle.[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html', // ✅ root-level index.html is fine
      favicon: './src/assets/fav.png',
    }),
  ],
  module: {
    rules: [
      // ✅ REMOVE THIS unless you use <%- require() %> in .html
      // {
      //   test: /\.html$/,
      //   use: ['html-loader'],
      // },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(svg|png|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'imgs/[name].[hash][ext]',
        },
      },
    ],
  },
};
