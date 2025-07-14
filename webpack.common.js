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
  mode: 'production', // or 'development'
  entry: './src/index.js', // ✅ keep pointing to src/index.js
  output: {
    filename: 'bundle.[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html', // ✅ uses index.html from root
      favicon: './src/assets/fav.png',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.html$/,
        use: ['html-loader'],
      },
      {
        test: /\.(svg|png|jpg|jpeg|gif)$/i,
        type: 'asset/resource', // ✅ better than file-loader in Webpack 5
        generator: {
          filename: 'imgs/[name].[hash][ext]',
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js'],
  },
};
