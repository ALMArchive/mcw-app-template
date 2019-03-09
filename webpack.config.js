const autoprefixer = require('autoprefixer');
const path = require("path");
const materialImporter = require(path.join(__dirname, "scripts/resolve_modules.js"));

module.exports = {
  entry: ['./app.scss', './app.ts'],
  output: {
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'bundle.css',
            },
          },
          { loader: 'extract-loader' },
          { loader: 'css-loader' },
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [autoprefixer()],
            },
          },
          {
            loader: 'sass-loader',
            options: {
              includePaths: ['./node_modules'],
              implementation: require('dart-sass'),
              // uncomment this option for nested node modules
              // importer: materialImporter
            },
          }],
      },
      
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['env'],
        },
      },
      {
        test: /\.(png|svg|jpg|gif|woff2)$/,
        use: [
          'file-loader'
        ]
      }],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  }
};
