var path = require("path");
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
  mode: "production",
  entry: "./jsonresume-theme-lucasswartsenburg/component.js",
  output: {
    path: path.resolve("build"),
    filename: "index.js",
    libraryTarget: "commonjs2"
  },
  module: {
    rules: [
      { 
        test: /\.hbs$/,
        use: {
          loader: "handlebars-loader",
          options: {
            helperDirs: [__dirname + '/jsonresume-theme-lucasswartsenburg/theme/hbs-helpers'],
            partialDirs: [__dirname + '/jsonresume-theme-lucasswartsenburg/theme/partials'],
          }
        }
      },
      { 
        test: /\.js$/, 
        exclude: /node_modules|jsonresume-lib/, 
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", '@babel/react'],
            plugins: ['@babel/proposal-class-properties']
          }
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(svg|eot|woff|woff2|ttf)$/,
        use: ['file-loader']
      },
      {
        test: /\.ya?ml$/,
        type: 'json', // Required by Webpack v4
        use: 'yaml-loader'
      }
    ]
  },
  externals: {
    react: "react"
  },
  target: 'node',
};