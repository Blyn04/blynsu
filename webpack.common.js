const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      favicon: `./src/assets/b-logo.png`,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.html$/,
        use: {
          loader: 'html-loader',
          options: {
            attributes: {
              list: [
                '...',
                {
                  tag: 'button',
                  attribute: 'data-project-img',
                  type: 'src',
                },
                {
                  tag: 'button',
                  attribute: 'data-project-img-mobile',
                  type: 'src',
                },
              ],
            },
          },
        },
      },
      {
        test: /\.(svg|png|jpg|jpeg|gif)$/i,
        use: {
          loader: 'file-loader',
          options: {
            esModule: false,
            name: '[name].[hash].[ext]',
            outputPath: 'imgs',
          },
        },
      },
    ],
  },
};
