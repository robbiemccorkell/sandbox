module.exports = {
  entry: "./client.js",
  output: {
    path: __dirname + '/public',
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['babel-loader'],
        exclude: /node_modules/
      }
    ]
  }
};
