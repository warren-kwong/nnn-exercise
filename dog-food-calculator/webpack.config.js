const path = require('path');

const SRC_DIR = path.join(__dirname, "./app/src/");
const DIST_DIR = path.join(__dirname, "./app/dist/");

module.exports = {
  mode: 'development',
  entry: `${SRC_DIR}/index.jsx`,
  output: {
    path: `${DIST_DIR}`,
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  devServer: {
    contentBase: DIST_DIR,
    open: true
  }
};
