var path = require("path");

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
      }
    ]
  },
  externals: {
    react: "react"
  },
  target: 'node'
};