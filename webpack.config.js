module.exports = {
  entry: './public/src/app.js',
  output: {
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {test: /\.js$/, loader: 'babel', exclude: /node_modules/, query: {
        cacheDirectory: true
      }},
      {
        test: /\.(png|jpg|svg)$/,
        loader: 'url'
     }
    ]
  }
}